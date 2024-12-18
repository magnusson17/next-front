import { arrayIdBlocchi, getSingleContent } from "@/utils/requestFunctions";
import AllBlocchi from "@/components/blocchi/AllBlocchi"

export default async function Cibo({ params: { slug, lang } }) {

    // lo slug è un array (che in questo caso è determinato dalle categorie del el)
    // Attenzione! prende il nome del el e non delle cat, lo slug lo uso quando ho + strings nel url 
    const lastEl = slug.at(-1);

    const singleCibo = await getSingleContent(process.env.GET_ALL_FOOD, lang, "slug", lastEl)
    const blocchiIds = await arrayIdBlocchi(singleCibo)

    return (
        <div className="page-cibo">
            <h1>CIBO</h1>
            <div key={singleCibo.nid}>
                <h2>{singleCibo.field_titolo_main}</h2>
                {blocchiIds ? <AllBlocchi blocchiIds={blocchiIds} lang={lang} /> : ''}
            </div>
        </div>
    )
}