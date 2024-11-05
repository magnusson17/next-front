import { getSingleContent, arrayIdBlocchi } from "@/components/functions/requestFunctions";
import AllBlocchi from "@/components/blocchi/AllBlocchi"

export default async function Pizza({params}) {

    const singlePizza = await getSingleContent(process.env.GET_ALL_PIZZAS, "slug", params.slug)
    const blocchiIds = await arrayIdBlocchi(singlePizza)

    return (
        <div className="page-pizza">
            <h1>PIZZA</h1>
            <div key={singlePizza.nid}>
                <h2>{singlePizza.field_titolo_main}</h2>
                <AllBlocchi blocchiIds={blocchiIds} />
            </div>
        </div>
    )
}