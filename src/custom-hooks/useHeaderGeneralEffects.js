"use client"

import { useEffect } from "react"
import { addRemoveClass } from "@/utils/headerEffects"

export default function useHeaderGeneralEffects() {
    return (
        useEffect(() => {

            function changeHeaderLayout() {
                const header = document.getElementById('header')
                const headerRect = header.getBoundingClientRect()
                const targets = document.querySelectorAll(".bg-same-as-header")
                let loop = true
            
                for (let i = 0; i < targets.length; i++) {
                    const targetRect = targets[i].getBoundingClientRect()
                    if (headerRect.bottom >= targetRect.top && headerRect.bottom < targetRect.bottom) {
                        loop = false
                        break
                    } else {
                        loop = true
                    }
                }
            
                // loop ? bg iniziale : cambia bg (come arg passa: l'el, se è vero/falso che devo aggiungere la classe, la classe)
                loop ? addRemoveClass(header, false, "header--secondary") : addRemoveClass(header, true, "header--secondary")
            }

            const handleChangeHeaderLayout = () => changeHeaderLayout()

            window.addEventListener("scroll", handleChangeHeaderLayout)
            return () => { window.removeEventListener("scroll", handleChangeHeaderLayout) }
        }, [])
    )
}

    
