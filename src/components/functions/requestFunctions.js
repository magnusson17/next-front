import { unstable_noStore } from "next/cache"
// all contents
/*export async function fetchRequest(endPoint) {
    try {
        return await fetch(`${process.env.API_URL}/${endPoint}`)
            .then(res => res.json())
    } catch(error) {
        console.log(error)
    }
}*/
export function fetchRequest(endPoint) {
    unstable_noStore()
    return fetch(`${process.env.API_URL}/${endPoint}`)
        .then(res => res.json())
}

// single content
export async function getSingleContent(endPoint, filterType, filterValue) {
    // prendo tutti i contenuti
    const allContents = await fetchRequest(endPoint)
    // trovo il singolo contenuto
    const singleContent = allContents.find((el) => {
        if (filterType === "nid") {
            return Number(el.nid) === filterValue
        } else if (filterType === "slug") {
            return el.field_titolo_main.toLowerCase().replace(/\s+/g, '-') === filterValue
        }
    })
    return singleContent
}

// blocchi id array
export async function arrayIdBlocchi(data) {
    return data.field_blocchi.split(",").map(Number)
}