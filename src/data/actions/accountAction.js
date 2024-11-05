"use server"

export async function accountAction(uuid, prevState, formData) {
    console.log(uuid)
    console.log(formData)

    const payload = {
        name: formData.get('name'),
    }

    try {
        const response = await fetch(`${process.env.API_URL}/jsonapi/user/user/${uuid}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json',
            },
            body: JSON.stringify({
                data: {
                    type: 'user--user',
                    id: uuid,
                    attributes: {
                        name: payload.name
                    }
                }
            })
        })
        const updatedData = await response.json()
        console.log(updatedData)
        return updatedData
    } catch(error) {
        console.log(error)
    }
}