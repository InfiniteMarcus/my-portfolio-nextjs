import { useState, useEffect } from 'react';
import { debounce } from '../../utils'

import navbarStyle from './style'
import NavItem from '../NavItem'
import Hamburguer from '../Hamburger'

export default function Navbar({ items }) {

    const [responsiveMode, setResponsiveMode] = useState(false);

    useEffect(() => {
        const debouncedHandleResize = debounce(() => {
            window.innerWidth < 950 ? setResponsiveMode(true) : setResponsiveMode(false);
        }, 50)

        window.addEventListener('resize', debouncedHandleResize)

        debouncedHandleResize();

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
    }}, [])

    const toggleHamburger = () => {
        setResponsiveMode(!responsiveMode);
    }

    const navItems = items.map((item, index) => <div key={`navbar-${index}`}><NavItem item={item}/></div> )

    return ( 
        <nav>
            <Hamburguer onClick={toggleHamburger} />
            <ul className={responsiveMode ? '' : 'visible'}>
                {navItems}
            </ul>
            <style jsx>
                    { navbarStyle }
            </style>
        </nav>
    )
}

