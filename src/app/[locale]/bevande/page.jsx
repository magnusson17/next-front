import { arrayIdBlocchi, fetchRequest, getSingleContent } from "@/utils/requestFunctions";
import AllBlocchi from "@/components/blocchi/AllBlocchi";

export default async function Bevande({ params: { locale } }) {
    const singlePage = await getSingleContent(process.env.GET_ALL_PAGES, locale, "nid", 16)
    const blocchiIds = await arrayIdBlocchi(singlePage)
    const drinks = await fetchRequest(process.env.GET_ALL_DRINKS, locale)

    const categorizedDrinks = {}

    drinks.forEach(drink => {
        if (!categorizedDrinks[drink.field_prezzo]) categorizedDrinks[drink.field_prezzo] = []
        categorizedDrinks[drink.field_prezzo].push(drink)
    })

    return (
        <main className="relative page-bevande">
            <div className="
            teasers-cibi
            px-10
            ">
                {Object.entries(categorizedDrinks).map(([price, els]) => (
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
                        <ul>
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
            {blocchiIds ? <AllBlocchi blocchiIds={blocchiIds} lang={locale} /> : ''}
        </main>
    );
}