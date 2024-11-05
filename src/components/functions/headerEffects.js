"use client"

export function addRemoveClass(p_el, p_addClass, p_class) {
    if (p_addClass) {
        p_el.classList.contains(p_class) ? "" : p_el.classList.add(p_class)
    } else {
        p_el.classList.remove(p_class)
    }
}

export function openCloseMenuMob(p_headerBody, p_body) {
    if (p_headerBody.classList.contains("openMenu")) {
        addRemoveClass(p_headerBody, false, "openMenu")
        addRemoveClass(p_body, false, "stopScroll")
    } else {
        addRemoveClass(p_headerBody, true, "openMenu")
        addRemoveClass(p_body, true, "stopScroll")
    }
}

export function closeMenuMobAndScroll(p_headerBody, p_body) {
    addRemoveClass(p_headerBody, false, "openMenu")
    addRemoveClass(p_body, false, "stopScroll")
}