import { fetchRequest } from "@/components/functions/requestFunctions";

import BloccoA from "@/components/blocchi/BloccoA";
import BgBloccoA from "@/components/blocchi/elementiBloccoA/BgBloccoA";
import WrapperTestiBloccoA from "@/components/blocchi/elementiBloccoA/WrapperTestiBloccoA";
import DidascaliaBloccoA from "@/components/blocchi/elementiBloccoA/DidascaliaBloccoA";
import BloccoB from "@/components/blocchi/BloccoB";

import TitoloMain from "@/components/generals/texts/TitoloMain";
import SoprattitoloMain from "@/components/generals/texts/SoprattitoloMain";
import TitoloBlocco from "@/components/generals/texts/TitoloBlocco";
import TestoMainBlocco from "@/components/generals/texts/TestoMainBlocco";

export default async function AllBlocchi({blocchiIds}) {

    // fetcho TUTTI i paragraphs esistenti nel sito
    const blocchi = await fetchRequest(process.env.GET_ALL_PARAGRAPHS)

    return (
        <div className="all-blocchi">
            {blocchi.map(blocco => {
                // se l'id del singolo blocco è incluso nell'array di id che passo in props allora stampo il blocco
                if (blocchiIds.includes(Number(blocco.id))) {
                    // a seconda del type stampo il relativo component
                    if (blocco.type === "Blocco A") {
                        return (
                            <BloccoA key={crypto.randomUUID()}>
                                <BgBloccoA img={blocco.field_immagine} />
                    
                                <WrapperTestiBloccoA>
                                    <SoprattitoloMain textAlign={blocco.field_allineamento_soprattitolo}>
                                        {blocco.field_soprattitolo}
                                    </SoprattitoloMain>
                                    <TitoloMain>{blocco.field_titolo}</TitoloMain>
                                </WrapperTestiBloccoA>
                    
                                <DidascaliaBloccoA>Lake Como, Italy</DidascaliaBloccoA>
                            </BloccoA>
                        )
                    } else if (blocco.type === "Blocco B") {
                        return (
                            <BloccoB key={crypto.randomUUID()} id={blocco.field_html_attr_id} layout={blocco.field_layout}>
                                <SoprattitoloMain textAlign={blocco.field_allineamento_soprattitolo}>
                                    {blocco.field_soprattitolo}
                                </SoprattitoloMain>
                                <TitoloBlocco>{blocco.field_titolo}</TitoloBlocco>
                                <TestoMainBlocco>{blocco.field_testo}</TestoMainBlocco>
                            </BloccoB>
                        )
                    }
                }
            })}
        </div>
    )    
}

