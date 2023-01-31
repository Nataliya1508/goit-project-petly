import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import BurgerMenuNav from './BurgerMenuNav'
import DesktopNav from './DesktopNav'

export default function Nav({ onClick }) {
    const navItems = [
        { href: '/news', text: 'News' },
        { href: '/notices', text: 'Find pet' },
        { href: '/friends', text: 'Our friends' }
    ]

    const [isBurgerMenu] = useMediaQuery('(max-width: 1279px)')
    const [isDesktop] = useMediaQuery('(min-width: 1280px)')

    return (
        <>
            {isBurgerMenu && <BurgerMenuNav items={navItems} action={onClick} />}
            {isDesktop && <DesktopNav items={navItems} />}
        </>
    )
}
