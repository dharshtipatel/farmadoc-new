"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

function getValueByPath(source: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, segment) => {
    if (current && typeof current === "object" && segment in (current as Record<string, unknown>)) {
      return (current as Record<string, unknown>)[segment];
    }

    return undefined;
  }, source);
}

export function useAppTranslation() {
  const { lang } = useLanguage();
  const dictionary = translations[lang];

  const t = (path: string, fallback = path): string => {
    const value = getValueByPath(dictionary, path);
    return typeof value === "string" ? value : fallback;
  };

  const get = <T,>(path: string, fallback: T): T => {
    const value = getValueByPath(dictionary, path);
    return (value as T) ?? fallback;
  };

  return { lang, t, get };
}
