"use client"

import { startTransition, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import ItalyFlag from "./svg/ItalyFlag";
import UkFlag from "./svg/UkFlag";

// "left-1/2",
//  "-translate-x-1/2",

const dropdownClassesArr = [
    "dropdown",
    "absolute",
    "top-full",
    "-left-full",
    "bg-white",
    "text-secondary-text",
    "font-bold",
    "rounded-md",
    "border-solid",
    "border-2",
    "border-black",
    "hidden",
]
const singleLangWrapperClassesArr = [
    "option",
    "flex",
    "justify-between",
    "items-center",
    "gap-x-2",
    "px-2",
    "py-1/2",
    "rounded-md",
    "cursor-pointer",
    "hover:bg-secondary-bg",
]
const dropdownClasses = dropdownClassesArr.join(" ")
const singleLangWrapperClasses = singleLangWrapperClassesArr.join(" ")

export default function LocaleSwitcher({ mob }) {
    // accedo al locale, al url e alle ultime strings del url (es en/cibi)
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    // siccome posso avere più LocaleSwitcher nella stessa pag
    // creo e uso una ref che mi blocca gli eventi all'interazione col 1o component
    // cosi da non richiamare più volte l'handler
    const isWindowListenerAdded = useRef(false)
    // do una ref a select, btn, dropdown
    const selectRef = useRef(null)
    const btnRef = useRef(null)
    const dropdownRef = useRef(null)

    // cambio lang nel url grazie a startTransition
    const changeLang = (chosenLang) => {
        startTransition(() => {
            // nel url sostituisco locale (e solo locale, senza toccare il resto del path)
            const newUrl = pathname.replace(/^\/[a-z]{2}/, `/${chosenLang}`)
            router.replace(newUrl)
        })
    }

    // creo 2 useEffect per gestire isWindowListenerAdded
    // che se usato nello stesso useEffect bloccherebbe anche il codice che non dovrebbe bloccare
    useEffect(() => {
        const dropdown = dropdownRef.current
        // isWindowListenerAdded inizialmente = false, quindi al primo evento passa questa linea
        // di seguito verrà poi settato true e quindi al 2o "loop" il codice verrà bloccato
        if (isWindowListenerAdded.current) return

        // siccome nel successivo useEffect do un evento al click della select e in questo useEffect do un evento al click della window
        // essendo la select nella widow ho il problema che il click scateni entrambi gli eventi
        // faccio il toggle solo se l'el cliccato non è contenuto nella select
        const handleWindowClick = (e) => {
            const select = selectRef.current
            if (!select.contains(e.target)) {
                if (!dropdown.classList.contains("hidden")) {
                    dropdown.classList.add("hidden")
                    document.body.classList.remove("no-scroll")
                }
            }
        }

        window.addEventListener('click', handleWindowClick)
        isWindowListenerAdded.current = true
        
        return () => {
            window.removeEventListener('click', handleWindowClick)
            isWindowListenerAdded.current = false
        }
    }, [])

    useEffect(() => {
        const btn = btnRef.current
        const dropdown = dropdownRef.current
        
        const handler = () => {
            dropdown.classList.toggle("hidden")
            document.body.classList.toggle("no-scroll")
        }
        
        btn.addEventListener('click', handler)
        dropdown.addEventListener('click', handler)
        
        return () => {
            btn.removeEventListener("click", handler)
            dropdown.removeEventListener("click", handler)
        }
    }, [])
    
    return (
        <div ref={selectRef} className="custom-select relative">
            <button ref={btnRef} className="select-btn">
                <div className={locale !== "en" ? "hidden" : ""}><UkFlag/></div>
                <div className={locale !== "it" ? "hidden" : ""}><ItalyFlag/></div>
            </button>

            <div ref={dropdownRef} className={dropdownClasses}>
                <div className={singleLangWrapperClasses} onClick={() => changeLang("en")}>
                    <span>EN</span> <UkFlag/>
                </div>
                <div className={singleLangWrapperClasses} onClick={() => changeLang("it")}>
                    <span>IT</span> <ItalyFlag/>
                </div>
            </div>
        </div>
    )
}