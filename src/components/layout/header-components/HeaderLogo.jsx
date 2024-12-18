import { useLocale } from "next-intl";
import LogoSvg from "@/components/general/svg/LogoSvg";
import Link from "next/link";

export default function HeaderLogo({mob}) {
    const locale = useLocale()
    const classes = mob ? "block md:hidden w-16" : "hidden md:block w-32"

    return (
        <Link className={classes} href={`/${locale}`}>
            <LogoSvg fill="fill-secondary-text" />
        </Link>
    )
}