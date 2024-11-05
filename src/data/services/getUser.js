// import { getCookie } from "./getCookie";

export async function getUser() {
    try {
        const response = await fetch(`${process.env.API_URL}/jsonapi/user/user?filter[uid][condition][path]=uid&filter[uid][condition][value]=${process.env.USER_LOGGED}?_format=json`, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        const data = await response.json();
        if (data.error) return { ok: false, data: null, error: data.error };
        return { ok: true, data: data, error: null };
    } catch(error) {
        console.log(error)
        return { ok: false, data: null, error: error };
    }
}
  