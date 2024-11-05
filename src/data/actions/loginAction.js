"use server";

import { redirect } from "next/navigation";
import { loginService } from "../services/loginService";

export async function loginAction(prevState, FormData) {
    const data = {
        name: FormData.get('name'),
        pass: FormData.get('pass')
    }

    const resData = await loginService(data)
    
    redirect("/dashboard");
}