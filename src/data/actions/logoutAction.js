"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
    cookies().set({
        name: process.env.DRUPAL_COOKIE,
        value: '', // Set value to empty string
        expires: new Date(0), // Set expiration to a past date
        path: '/', // Ensure the path is the same as the original cookie
    });
    redirect("/");
}