import { arrayIdBlocchi, getSingleContent } from "@/utils/requestFunctions";
import AllBlocchi from "@/components/blocchi/AllBlocchi";

export default async function Home({ params: { locale } }) {
    const singlePage = await getSingleContent(process.env.GET_ALL_PAGES, locale, "nid", 3)
    const blocchiIds = await arrayIdBlocchi(singlePage)

    return (
        <main className="relative page-homepage">
            <AllBlocchi blocchiIds={blocchiIds} lang={locale} />
        </main>
    );
}