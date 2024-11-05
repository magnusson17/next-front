import { arrayIdBlocchi, getSingleContent } from "@/components/functions/requestFunctions";
import AllBlocchi from "@/components/blocchi/AllBlocchi";

export default async function Home() {

    const singlePage = await getSingleContent(process.env.GET_ALL_PAGES, "nid", 3)
    const blocchiIds = await arrayIdBlocchi(singlePage)

    return (
        <main className="relative page-homepage">
            <h1>{singlePage.field_titolo_main}</h1>
            <AllBlocchi blocchiIds={blocchiIds} />
        </main>
    );
}