import css from 'styled-jsx/css'
import { darkTheme } from '../../styles/theme';

export default css`

    .hamburger {
        display: none;
        max-height: 35px;
        position: absolute;
    }

    .hamburger-btn {
        z-index: 12;
    }

    .visible {
        display: block;
    }

    .icon {
        cursor: pointer;
    }

    .icon:hover, .icon:active {
        opacity: 0.8;
    }

    .hamburger-list {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 11;
        background-color: ${darkTheme.colors.menuhover};
        border-left: 2px solid ${darkTheme.colors.primary};
        border-bottom: 2px solid ${darkTheme.colors.primary};
        animation: reveal 0.5s forwards;
                
        width: 325px;
        height: 100vh;
        margin-top: 360px;
        padding: 650px 25px 650px;

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

    @media (max-width: 949px) {
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