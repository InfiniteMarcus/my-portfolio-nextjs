import { useState, useEffect } from 'react';
import { debounce } from '../../utils'

import navbarStyle from './style'
import NavItem from '../NavItem'
import Hamburger from '../Hamburger'

export default function Navbar({ items }) {

    const [responsiveMode, setResponsiveMode] = useState(true);

    useEffect(() => {
        const debouncedHandleResize = debounce(() => {
            window.innerWidth < 950 ? setResponsiveMode(true) : setResponsiveMode(false);
        }, 50)

        window.addEventListener('resize', debouncedHandleResize)

        debouncedHandleResize();

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
    }}, [])

    const navItems = items.map((item, index) => <div key={`navbar-${index}`}><NavItem item={item}/></div> )

    return ( 
        <nav>
            <ul className={responsiveMode ? '' : 'visible'}>
                {navItems}
            </ul>

            <Hamburger navItems={navItems}/>

            <style jsx>
                    { navbarStyle }
            </style>
        </nav>
    )
}

