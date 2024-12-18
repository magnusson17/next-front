This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## INFO AGGIUNTIVE ###################################################################################################

# A # Come funzionano rest views e fetch

1)  Creazine/settaggio rest view su Drupal

    # 1.1 # Creazione

    -   Rest views che stampano tutti i contents avente lo stesso content type
        (es. get-all-basic-pages, get-all-pizzas...)

    -   Rest view che stampa tutti i paragraphs contenuti nel cms
        (get-all-paragraphs)

    # 1.2 # Settaggio

    -   Nella sezione `Format`

        -   Sotto la voce `Format` seleziona `Serializer` e nel settings spunta `json` come formato accettabile
        -   Sotto la voce `Show` seleziona `Fields`

    -   Nella sezione `Fields`

        -   Inserire tutti i fields che voglio mostrare a schermo (es. field_titolo, field_testo...)

        -   Inserire tutti i fields identificativi o necessari per collegare il content al paragraphs
            
            # in Content
            -   Content: ID
            -   Content: Blocchi (`field_blocchi`)
                -   la lista di id dei blocchi appartenenti al content
                -   in settings, rewrite results, spunta "Override..." e inserisci `{{ field_blocchi__target_id }}`

            # in paragraphs
            -   Paragraph: ID
            -   Paragraph: Paragraph type
                -   il nome del paragraph (es. Blocco A)
                -   in settings seleziona `Label` nella sezione `Formatter`

2)  Utilizzo delle rest view su Next, tramite fetch

    # 2.1 # Funzioni request

    -   A seconda della necessità dovrò prendere una o più rest view che stampano:
        -   Tutti i contents della view                                             ---> Se voglio stampare dei teasers
        -   Un singolo content della view                                           ---> Se voglio stampare i campi di quel contenuto 
        -   L'elenco degli id in `field_blocchi` di un singolo content della view   ---> Se voglio stampare i blocchi di quel contenuto

    -   In `components/functions` creo `requestFunctions.js` dove definisco le 3 funzioni adatte per ogni necessità
        -   `fetchRequest`
        -   `getSingleContent`
        -   `arrayIdBlocchi`

    -   Nelle singole `page.jsx` richiamo la funzione di cui ho bisogno a seconda del caso

        ```js casi:
        // se sono in una PAGINA STATICA e voglio stampare le info della singola pagina, passo nella funzione il NID
        const singlePage = await getSingleContent(process.env.GET_ALL_PAGES, "nid", 4) //
        // se sono in una PAGINA DINAMICA e voglio stampare le info della singola pagina passo nella funzione lo SLUG
        const singlePizza = await getSingleContent(process.env.GET_ALL_PIZZAS, "slug", params.slug)
        // array id dei blocchi
        const blocchiIds = await arrayIdBlocchi(singlePage)
        // get all contents
        const pizzas = await fetchRequest(process.env.GET_ALL_PIZZAS)
        ```

    # 2.2 # Stampa dei blocchi

    -   In `page.jsx` chiamo la funzione `arrayIdBlocchi`
        -   Essa ritorna un array contenente gli id dei blocchi del content
        -   Salvo l'array in una const
        -   Passo la const come props del component che stampa tutti i blocchi appartenenti al singolo content (`<AllBlocchi blocchiIds={blocchiIds} lang={lang} />`)
    
    -   Definisco il component `AllBlocchi`
        -   Ha come props l'array contenente gli id dei blocchi del content
        -   Assegno a una const `blocchi` il risultato della funzione `fetchRequest` (avente come arg l'endpoint della rest view che stampa i paragraphs)
        -   Mappo `blocchi` e a ogni loop verifico che l'id del blocco looppato sia incluso nel l'array contenente gli id dei blocchi
        -   Controllo il type del blocco looppato e stampo in component relativo a quel type
    
"start": "cross-env PORT=3001 next start",
"start": "cPORT=3001 next start",

# locale
BASE_API_URL=http://localhost
API_URL=http://localhost/TEST-CORSI/NextXDrupal/proj-per-primo-deploy/drupal-back/httpdocs

# production
# BASE_API_URL=http://backend.veg-node.com
# API_URL=http://backend.veg-node.com/httpdocs

# generale
GET_ALL_PAGES=api/get-all-pages
GET_ALL_PIZZAS=api/get-all-pizzas
GET_ALL_PARAGRAPHS=api/get-all-paragraphs
DRUPAL_COOKIE=SESS6e0203826031fb91c23f8ac56350a744
IS_LOGGED=false
USER_LOGGED=