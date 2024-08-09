"use server";

import { cookies } from "next/headers";

import { DEFAULT_LOCALE } from "../config";
import { Locale } from "../types";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || DEFAULT_LOCALE;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
