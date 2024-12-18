"use client"

// custom hooks
import useHeaderGeneralEffects from "@/custom-hooks/useHeaderGeneralEffects";
import useHeaderMobEffects from "@/custom-hooks/useHeaderMobEffects";
// hooks
import { useTranslations } from 'next-intl';
// components
import HeaderWrapper from "@/components/layout/header-components/HeaderWrapper";
import HeaderNav from "@/components/layout/header-components/HeaderNav";
import HeaderLink from "@/components/layout/header-components/HeaderLink";
import HeaderLogo from "@/components/layout/header-components/HeaderLogo";
import HeaderHeadMob from "@/components/layout/header-components/HeaderHeadMob";
import HeaderToggleIcon from "@/components/layout/header-components/HeaderToggleIcon";

export default function Header({ lang }) {
    useHeaderGeneralEffects()
    useHeaderMobEffects()

    const t = useTranslations('Header')

    return (
        <HeaderWrapper secondary={false}>
            <HeaderHeadMob>
                <HeaderLogo mob={true} />
                <HeaderToggleIcon />
            </HeaderHeadMob>

            <HeaderNav mob={false}>
                <li className='hidden md:block'><HeaderLogo mob={false} /></li>
                <HeaderLink href={`/${lang}/cibi`}>{t('cibi')}</HeaderLink>
                <HeaderLink href={`/${lang}/bevande`}>{t('bevande')}</HeaderLink>
                {/* <HeaderLink href="/signin">Signin</HeaderLink> */}
                {/* <HeaderLink href="/signup">Signup</HeaderLink> */}
            </HeaderNav>
            
            <HeaderNav mob={true}>
                <HeaderLink href={`/${lang}/cibi`}>{t('cibi')}</HeaderLink>
                <HeaderLink href={`/${lang}/bevande`}>{t('bevande')}</HeaderLink>
                {/* <HeaderLink href="/signin">Signin</HeaderLink> */}
                {/* <HeaderLink href="/signup">Signup</HeaderLink> */}
            </HeaderNav>
        </HeaderWrapper>
    )
}