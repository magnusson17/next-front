// all contents
export function fetchRequest(endPoint, lang) {
    try {
        return fetch(`${process.env.API_URL}/${endPoint}/${lang}`)
            .then(res => res.json())
    } catch(error) {
        console.log(error)
    }
}

// single content
export async function getSingleContent(endPoint, lang, filterType, filterValue) {
    // prendo tutti i contenuti
    const allContents = await fetchRequest(endPoint, lang)
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
    if (!data || data.field_blocchi === "") return
    return data.field_blocchi.split(",").map(Number)
}