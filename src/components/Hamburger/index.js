import { useState } from 'react';
import hamburgerStyle from './style'

export default function Hamburger({navItems}) {

    const [toggled, setToggled] = useState(false);

    const toggleHamburger = () => {
        setToggled(!toggled);
    }

    return ( 
        <>
            <div className="hamburger">
                <div style={{marginRight : toggled ? '-65px' : '30px'}} className="hamburger-btn">
                    <a className="icon" onClick={toggleHamburger}>
                        <img width="35" height="35" alt="" src="/images/hamburger.svg"></img>
                    </a>
                </div>

                <div style={{display : toggled ? 'block' : 'none'}} className="hamburger-list">
                    {navItems}
                </div>
                <div style={{display : toggled ? 'block' : 'none'}} className="unfocus" onClick={toggleHamburger}></div>

                <style jsx>
                    { hamburgerStyle }
                </style>
            </div>
        </>
    )
}

