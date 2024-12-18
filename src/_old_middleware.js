import { NextResponse } from "next/server";
import { getUser } from "@/data/services/getUser";

export async function middleware(request) {
    const user = await getUser();
    const currentPath = request.nextUrl.pathname;
    
    if (currentPath.startsWith("/dashboard") && user.ok === false) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next();
}