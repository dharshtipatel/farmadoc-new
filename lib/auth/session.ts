"use client";

import { useSyncExternalStore } from "react";

const AUTH_EVENT = "farmadoc-auth-change";

type SessionUser = {
  _id?: string;
  name?: string;
  email?: string;
};

type AuthSnapshot = {
  isLoggedIn: boolean;
  user: SessionUser | null;
};

type PersistedAuthSession = {
  user: SessionUser;
  accessToken: string;
  refreshToken?: string;
};

const emptySnapshot: AuthSnapshot = {
  isLoggedIn: false,
  user: null,
};

let cachedAccessToken: string | null | undefined;
let cachedUserRaw: string | null | undefined;
let cachedSnapshot: AuthSnapshot = emptySnapshot;

function parseStoredUser(raw: string | null): SessionUser | null {
  if (!raw) return null;

  try {
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}

export function readAuthSnapshot(): AuthSnapshot {
  if (typeof window === "undefined") {
    return emptySnapshot;
  }

  const accessToken = window.localStorage.getItem("accessToken");
  const userRaw = window.localStorage.getItem("user");

  if (accessToken === cachedAccessToken && userRaw === cachedUserRaw) {
    return cachedSnapshot;
  }

  const user = parseStoredUser(userRaw);

  cachedAccessToken = accessToken;
  cachedUserRaw = userRaw;
  cachedSnapshot = {
    isLoggedIn: Boolean(accessToken && user),
    user,
  };

  return cachedSnapshot;
}

function emitAuthChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_EVENT));
  }
}

export function persistAuthSession(session: PersistedAuthSession) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem("accessToken", session.accessToken);
  window.localStorage.setItem("refreshToken", session.refreshToken || "");
  window.localStorage.setItem("user", JSON.stringify(session.user));

  if (session.user._id) {
    window.localStorage.setItem("userId", session.user._id);
  }

  emitAuthChange();
}

export function clearAuthSession() {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem("accessToken");
  window.localStorage.removeItem("refreshToken");
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("userId");

  emitAuthChange();
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (!event.key || ["accessToken", "refreshToken", "user", "userId"].includes(event.key)) {
      callback();
    }
  };

  const handleAuthEvent = () => callback();

  window.addEventListener("storage", handleStorage);
  window.addEventListener(AUTH_EVENT, handleAuthEvent);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(AUTH_EVENT, handleAuthEvent);
  };
}

export function useAuthSession() {
  return useSyncExternalStore(subscribe, readAuthSnapshot, () => emptySnapshot);
}
