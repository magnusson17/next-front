// all contents
export function fetchRequest(endPoint) {
    try {
        return fetch(`${process.env.API_URL}/${endPoint}`)
            .then(res => res.json())
    } catch(error) {
        console.log(error)
    }
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
export function arrayIdBlocchi(data) {
    return data.field_blocchi.split(",").map(Number)
}