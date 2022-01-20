import { useState } from 'react';
import hamburgerStyle from './style'

export default function Hamburger({navItems}) {

    const [toggled, setToggled] = useState(false);

    const toggleHamburger = () => {
        setToggled(!toggled);
    }

    return ( 
        <div className="hamburger">
            <div onClick={toggleHamburger} className={`hamburger-btn ${toggled ? 'open' : ''}`} >
                <div className="hamburger-icon"></div>
            </div>

            <div style={{display : toggled ? 'flex' : 'none'}} className="hamburger-list">
                {navItems}
            </div>
            
            <div style={{display : toggled ? 'block' : 'none'}} className="unfocus" onClick={toggleHamburger}></div>


            <style jsx>
                { hamburgerStyle }
            </style>
        </div>
    )
}

