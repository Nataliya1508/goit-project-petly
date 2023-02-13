import BurgerMenu from 'components/BurgerMenu/BurgerMenu'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from 'redux/auth/auth-selectors'
import HeaderMenu from './HeaderMenu'

const Header = () => {
    const isUserLogin = useSelector(getIsLoggedIn)
    const [menuActive, setMenuActive] = useState(false)

    const isModalOpen = (bool) => {
        console.log(bool)
        if (!bool) {
            document.documentElement.classList.remove('disable-fix')
            document.body.style.overflowY = 'initial'
            return setMenuActive(bool)
        } else {
            document.documentElement.classList.add('disable-fix')
            document.body.style.overflowY = 'hidden'
            setMenuActive(bool)
        }
    }

    return (
        <>
            <HeaderMenu active={menuActive} setActive={isModalOpen} isLogin={isUserLogin} />
            <BurgerMenu active={menuActive} setActive={isModalOpen} isLogin={isUserLogin} />
        </>
    )
}

export default Header