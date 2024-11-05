export async function registerUserService(userData) {
    const url = new URL("/jsonapi/user/user", process.env.API_URL);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...userData }),
            cache: "no-cache",
        });

        return response.json();
    } catch (error) {
        console.error("Registration Service Error:", error);
    }
}