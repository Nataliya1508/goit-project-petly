import { useMediaQuery, Box } from '@chakra-ui/react'
import BurgerMenu from 'components/BurgerMenu/BurgerMenu'
import React, { useState } from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import TabletHeader from './TabletHeader'

export default function Header() {
    const [isMobile] = useMediaQuery('(max-width: 767px)')
    const [isTablet] = useMediaQuery('(min-width: 768px) and (max-width: 1279px)')
    const [isDesktop] = useMediaQuery('(min-width: 1280px)')

    const [menuActive, setMenuActive] = useState(false)

    const onBurgerBtnClick = () => {
        setMenuActive(!menuActive)

        if (!menuActive) {
            return document.body.style.overflow = 'hidden'
        }

        if (menuActive) {
            return document.body.style.overflow = ''
        }
    }

    return (
        <>
            {isMobile && <MobileHeader active={menuActive} setActive={onBurgerBtnClick} />}
            {isTablet && <TabletHeader active={menuActive} setActive={onBurgerBtnClick} />}
            {isDesktop && <DesktopHeader />}
            <BurgerMenu active={menuActive} setActive={setMenuActive} />
        </>
    )
}
