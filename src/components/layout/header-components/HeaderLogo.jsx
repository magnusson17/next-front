import LogoSvg from "@/components/generals/svg/LogoSvg";
import Link from "next/link";

export default function HeaderLogo({mob}) {
    const classes = mob ? "block md:hidden w-16" : "hidden md:block w-32"

    return (
        <Link className={classes} href="/">
            <LogoSvg fill="fill-secondary-text" />
        </Link>
    )
}