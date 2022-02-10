import css from 'styled-jsx/css'
import { darkTheme } from '../../styles/theme';

export default css`

    .hamburger {
        display: none;
        position: absolute;
    }

    .hamburger-btn, .hamburger-icon {
        z-index: 12;
    }
    
    .hamburger-btn {
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hamburger-btn:hover, .hamburger-btn:active {
        opacity: 0.9;
    }

    .hamburger-icon {
        width: 40px;
        height: 3px;
        background: #fff;
        border-radius: 5px;
        transition: all .5s ease-in-out;
    }

    .hamburger-icon::before,
    .hamburger-icon::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 3px;
        background: #fff;
        border-radius: 5px;
        transition: all .5s ease-in-out;
    }
    .hamburger-icon::before {
        transform: translateY(-14px);
    }
    .hamburger-icon::after {
        transform: translateY(14px);
    }

    /* ANIMATION */
    .hamburger-btn.open .hamburger-icon {
        transform: translateX(-50px);
        background: transparent;
    }
    .hamburger-btn.open .hamburger-icon::before {
        transform: rotate(45deg) translate(35px, -35px);
    }
    .hamburger-btn.open .hamburger-icon::after {
        transform: rotate(-45deg) translate(35px, 35px);
    }

    .hamburger-list {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: flex-start;
        z-index: 11;
        background-color: ${darkTheme.colors.menuhover};
        border-left: 2px solid ${darkTheme.colors.primary};
        border-bottom: 2px solid ${darkTheme.colors.primary};
        animation: reveal 0.5s forwards;
          
        position: absolute;
        top: -45px;
        right: 0;
        width: 250px;
        height: 110vh;
        margin-right: -50px;
        padding-top: 120px;
        padding-left: 20px;
    }

    .unfocus {
        z-index: 10;
        background-color: ${darkTheme.colors.menu};
        right:0;
        bottom:0;
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    @media (max-width: 1049px) {
        .hamburger {
            display: flex;
            align-items: center;
            flex-direction: row;
        }
    }

    @keyframes reveal {
        from {
            clip-path: inset(0 0 0 100%);
        }
        to {
            clip-path: inset(0 0 0 0);
        }
    }

`;