import { cookies } from "next/headers";

export async function getCookie() {
    const userCookie = cookies().get("user")?.value;
    return userCookie;
}