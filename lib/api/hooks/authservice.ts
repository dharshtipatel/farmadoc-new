import { API } from "./api";
import { apiClient } from "./apiClient";
import type { Step } from "../../../components/LoginModal";

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export type VerifyOtpPayload = {
  email: string;
  otp: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  newPassword: string;
  confirmNewPassword: string;
};

function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Registration failed";
}

export async function registerCustomer(
  data: RegisterPayload,
  callbacks?: {
  onSuccess?: () => void;
  onError?: (msg: string) => void;
  onNext?: (step: Step) => void;
}
) {
  try {
    const res = await apiClient(API.auth.register, {
      method: "POST",
      body: data,
    });

    // after success → move to OTP
    callbacks?.onSuccess?.();
    callbacks?.onNext?.("otp");

    return res;
  } catch (err: unknown) {
    callbacks?.onError?.(getErrorMessage(err));
    throw err;
  }
}

export async function verifyOtp(data: VerifyOtpPayload) {
  return apiClient(API.auth.verifyotp, {
    method: "POST",
    body: data,
  });
}

export async function loginUser(data: LoginPayload) {
  return apiClient(API.auth.login, {
    method: "POST",
    body: data,
  });
}

export async function forgotPassword(data: ForgotPasswordPayload) {
  return apiClient(API.auth.forgotpassword, {
    method: "POST",
    body: data,
  });
}

export async function verifyForgotPasswordOtp(data: VerifyOtpPayload) {
  return apiClient(API.auth.verifyforgotpassword, {
    method: "POST",
    body: data,
  });
}

export async function resetPassword(
  data: ResetPasswordPayload,
  token: string
) {
  return apiClient(API.auth.resetpassword, {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function resendOtp(data: { email: string }) {
  return apiClient(API.auth.resendotp, {
    method: "POST",
    body: data,
  });
}
