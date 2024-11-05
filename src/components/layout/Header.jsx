"use client"

// custom hooks
import useHeaderGeneralEffects from "@/components/custom-hooks/useHeaderGeneralEffects";
import useHeaderMobEffects from "@/components/custom-hooks/useHeaderMobEffects";
// components
import HeaderWrapper from "@/components/layout/header-components/HeaderWrapper";
import HeaderNav from "@/components/layout/header-components/HeaderNav";
import HeaderLink from "@/components/layout/header-components/HeaderLink";
import HeaderLogo from "@/components/layout/header-components/HeaderLogo";
import HeaderHeadMob from "@/components/layout/header-components/HeaderHeadMob";
import HeaderToggleIcon from "@/components/layout/header-components/HeaderToggleIcon";

export default function Header() {

    useHeaderGeneralEffects()
    useHeaderMobEffects()

    return (
        <HeaderWrapper secondary={false}>
            <HeaderHeadMob>
                <HeaderLogo mob={true} />
                <HeaderToggleIcon />
            </HeaderHeadMob>

            <HeaderNav mob={false}>
                <li className='hidden md:block'><HeaderLogo mob={false} /></li>
                <HeaderLink href="/pizzas">Tutte le pizze</HeaderLink>
                <HeaderLink href="/signin">Signin</HeaderLink>
                <HeaderLink href="/signup">Signup</HeaderLink>
            </HeaderNav>
            
            <HeaderNav mob={true}>
                <HeaderLink href="/pizzas">Tutte le pizze</HeaderLink>
                <HeaderLink href="/signin">Signin</HeaderLink>
                <HeaderLink href="/signup">Signup</HeaderLink>
            </HeaderNav>
        </HeaderWrapper>
    )
}