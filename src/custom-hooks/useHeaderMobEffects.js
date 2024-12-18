"use client"

import { useEffect } from "react"
import { closeMenuMobAndScroll, openCloseMenuMob } from '@/utils/headerEffects'

export default function useHeaderMobEffects() {
    return (
        useEffect(() => {
            const toggleBtn = document.querySelector(".header__toggle-btn")
            const headerBody = document.querySelector(".header__mob-body")
            const anchorLinks = document.querySelectorAll(".header__anchor-link")
            const body = document.body
    
            const handlerOpenCloseMenuMob = () => openCloseMenuMob(headerBody, body)
            const handlerCloseMenuMobAndScroll = () => closeMenuMobAndScroll(headerBody, body)
    
            toggleBtn.addEventListener("click", handlerOpenCloseMenuMob)

            anchorLinks.forEach((link) => {
                link.addEventListener("click", handlerCloseMenuMobAndScroll)
            })
            
            return () => {
                toggleBtn.removeEventListener("click", handlerOpenCloseMenuMob)
                
                anchorLinks.forEach((link) => {
                    link.removeEventListener("click", handlerCloseMenuMobAndScroll)
                })
            }
        }, [])
    )
}