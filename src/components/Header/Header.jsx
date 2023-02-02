import BurgerMenu from 'components/BurgerMenu/BurgerMenu'
import React, { useState } from 'react'
import HeaderMenu from './HeaderMenu'

const Header = () => {

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
            <HeaderMenu active={menuActive} setActive={onBurgerBtnClick} action={setMenuActive} />
            <BurgerMenu active={menuActive} setActive={onBurgerBtnClick} />
        </>
    )
}

export default Header