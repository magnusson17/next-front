import LocaleSwitcher from "@/components/general/LocaleSwitcher"

// MOB classes
const navMobClassesArr = [
    // custom @layer
    "header__mob-body",
    "header-transition",
    // custom config
    "h-el-below-header-mob",
    "bg-tertiary-bg",
    // normal
    "md:hidden",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "w-full",
    "-translate-y-full",
]
const ulMobClassesArr = [
    // custom config
    "text-primary-text",
    // normal
    "flex",
    "flex-col",
    "items-center",
]

// DESK classes
const navDeskClassesArr = [
    "hidden",
    "md:flex",
    "md:justify-between",
    "md:items-center",
    "md:w-full",
]
const ulDeskClassesArr = [
    "flex",
    "items-center",
    "gap-10",
]
const navMobClasses = navMobClassesArr.join(" ")
const ulMobClasses = ulMobClassesArr.join(" ")
const navDeskClasses = navDeskClassesArr.join(" ")
const ulDeskClasses = ulDeskClassesArr.join(" ")

export default function HeaderNav({children, mob}) {
    return (
        <nav className={`${mob ? navMobClasses : navDeskClasses}`}>
            <ul className={`${mob ? ulMobClasses : ulDeskClasses}`}>
                {children}
            </ul>

            <LocaleSwitcher />
        </nav>
    )
}