"use server";

import { cookies } from "next/headers";

import { DEFAULT_LOCALE } from "../config";
import { Locale } from "../types";

const COOKIE_NAME = "NEXT_LOCALE";

export const getUserLocale = async () => {
  const requestCookies = await cookies();
  return requestCookies.get(COOKIE_NAME)?.value || DEFAULT_LOCALE;
};

export const setUserLocale = async (locale: Locale) => {
  const requestCookies = await cookies();
  requestCookies.set(COOKIE_NAME, locale);
};
