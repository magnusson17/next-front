// "use client";

import { cookies } from "next/headers";

export async function loginService(p_data) {
    try {
        const response = await fetch(`${process.env.API_URL}/user/login?_format=json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({...p_data}),
        });

        const cookieString = response.headers.get('set-cookie');
        const cookieParts = cookieString.split('; ');
        const cookieData = {};
        
        cookieParts.forEach(part => {
            const [key, value] = part.split('=');
            if (key === 'expires') {
                cookieData.expires = new Date(value);
            } else if (key === 'Max-Age') {
                cookieData.maxAge = parseInt(value, 10);
            } else if (key === 'path') {
                cookieData.path = value;
            } else if (key === 'HttpOnly') {
                cookieData.httpOnly = true;
            } else if (key === 'SameSite') {
                cookieData.sameSite = value;
            } else {
                cookieData.name = key;
                cookieData.value = value;
            }
        });
        
        cookies().set(cookieData);
        
        const json = await response.json()
        
        console.log(response)
        console.log(json)
        
        process.env.IS_LOGGED = true
        process.env.USER_LOGGED = json.current_user.uid
        cookies().set('user', process.env.USER_LOGGED);

        console.log(process.env.IS_LOGGED)
        console.log(process.env.USER_LOGGED)

        return json
    } catch(error) {
        console.log(error)
    }
}