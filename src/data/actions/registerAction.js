"use server";

import { redirect } from "next/navigation";

export async function registerAction(prevState, FormData) {
    const url = new URL("/jsonapi/user/user", process.env.API_URL)

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/vnd.api+json',
            },
            body: JSON.stringify({
                data: {
                    type: 'user--user',
                    attributes: {
                        name: FormData.get('name'),
                        mail: FormData.get('mail'),
                        pass: FormData.get('pass')
                    },
                },
            }),
        });
        return response.json();
    } catch(error) {
        console.log(error)
    }

    redirect("/dashboard");
}