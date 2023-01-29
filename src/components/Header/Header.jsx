import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import TabletHeader from './TabletHeader'

export default function Header() {
    const [isMobile] = useMediaQuery('(max-width: 767px)')
    const [isTablet] = useMediaQuery('(min-width: 768px) and (max-width: 1279px)')
    const [isDesktop] = useMediaQuery('(min-width: 1280px)')

    return (
        <>
            {isMobile && <MobileHeader />}
            {isTablet && <TabletHeader />}
            {isDesktop && <DesktopHeader />}
        </>
    )
}
