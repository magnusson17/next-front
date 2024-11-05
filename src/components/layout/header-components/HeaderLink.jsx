import Link from "next/link"

const linkTxtClassesArr = [
    // total custom
    "header__anchor-link",
    // normal
    "text-base",
    "font-bold",
    "uppercase",
]
const linkTxtClasses = linkTxtClassesArr.join(" ")

export default function HeaderLink({href, children}) {
    return (
        <li><Link href={href} className={linkTxtClasses}>{children}</Link></li>
    )
}