import { fetchRequest, arrayIdBlocchi, getSingleContent } from "@/utils/requestFunctions";
import AllBlocchi from "@/components/blocchi/AllBlocchi";
import FiltroCibo from "@/components/general/FiltroCibo";

export default async function Cibi({ params: { locale } }) {

    const singlePage = await getSingleContent(process.env.GET_ALL_PAGES, locale, "nid", 15)
    const blocchiIds = await arrayIdBlocchi(singlePage)
    const food = await fetchRequest(process.env.GET_ALL_FOOD, locale)
    // per il filtro
    const titoliCategorie = await fetchRequest(process.env.GET_ALL_CATEGORIE_CIBO, locale)

    // divido i cibi in categorie
    const categorizedFood = {};

    food.forEach(el => {
        // divido le categorie in elementi diversi nello stesso array
        const categorie = el.field_categoria.split(',').map(cat => cat.trim())
        // looppo l'array delle categorie
        categorie.forEach(cat => {
            // se non esiste ancora un el di categorizedFood avente come key la cat looppata, lo creo
            if (!categorizedFood[cat]) categorizedFood[cat] = {}
            if (!categorizedFood[cat][el.field_prezzo]) categorizedFood[cat][el.field_prezzo] = []
            categorizedFood[cat][el.field_prezzo].push(el)
        })
    })

    return (
        <main className="relative page-pizze">
            <FiltroCibo titoliCat={titoliCategorie} />
            <div className="
            teasers-cibi
            px-10
            ">
                {Object.entries(categorizedFood).map(([cat, price]) => (
                    <div key={cat}>
                        <h2 
                        id={cat.toLowerCase()}
                        className="
                        text-[30px]
                        font-bold
                        uppercase
                        mt-10
                        ">{cat}</h2>
                        {Object.entries(price).map(([price, els]) => (
                            <div key={price}>
                                <h3 className="
                                text-base
                                text-white
                                font-bold
                                uppercase
                                bg-black
                                py-2
                                pl-10
                                -ml-10
                                ">{price}</h3>
                                <ul className="
                                bg-primary-bg
                                pl-10
                                -ml-10
                                ">
                                    {els.map(el => (
                                        <li key={el.nid}>
                                            <h4 className="
                                            text-red-700
                                            font-bold
                                            uppercase
                                            ">{el.field_titolo_main}</h4>
                                            <p className="
                                            lowercase
                                            ">{el.field_ingredienti}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {blocchiIds ? <AllBlocchi blocchiIds={blocchiIds} lang={locale} /> : ''}
        </main>
    );
}