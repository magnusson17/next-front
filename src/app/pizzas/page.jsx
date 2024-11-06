import { fetchRequest, arrayIdBlocchi, getSingleContent } from "@/components/functions/requestFunctions";
import AllBlocchi from "@/components/blocchi/AllBlocchi";
import clearString from "@/components/functions/clearString";
import Link from "next/link";

export default async function Pizzas() {

    const singlePage = await getSingleContent(process.env.GET_ALL_PAGES, "nid", 4)
    const blocchiIds = await arrayIdBlocchi(singlePage)
    const pizzas = await fetchRequest(process.env.GET_ALL_PIZZAS)

    return (
        <main className="relative page-pizze">
            <h1>{singlePage.field_titolo_main}</h1>
            <AllBlocchi blocchiIds={blocchiIds} />
            <ul className="teasers-pizze">
                {pizzas.map((pizza) =>
                    <li key={pizza.nid}><Link href={`pizzas/${clearString(pizza.field_titolo_main)}`}>{pizza.field_titolo_main}</Link></li>
                )}
            </ul>
        </main>
    );
}