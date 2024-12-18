"use client"
// NON USATO NEL PROG, SERVE SOLO DA ESEMPIO

// Attenzione! esistono altri "useRouter", usa quello di next/navigation
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { useLocale } from "use-intl"

export default function LocaleSwitcher() {
    // per cambiare uno stato SENZA cambiare UI
    const [isPending, startTransition] = useTransition()
    // voglio accedere alla route (url) e in un secondo momento aggiornarla
    const router = useRouter()
    // prendo la locale per darla conìme default value alla select
    const locale = useLocale()

    const changeLang = (e) => {
        e.preventDefault()
        startTransition(() => {
            router.replace(`/${e.target.value}`)
        })
    }

    return (
        <>
            <select
                className="select-custom"
                defaultValue={locale} 
                onChange={changeLang}
                // quando isPending = true, disabilito
                disabled={isPending}
            >
                <option value="en">EN</option>
                <option value="it">IT</option>
            </select>
        </>
    )
}