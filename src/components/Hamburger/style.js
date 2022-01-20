import css from 'styled-jsx/css'
import { darkTheme } from '../../styles/theme';

export default css`

    .hamburguer {
        display: none;
        z-index: 10;
    }

    .icon {
        cursor: pointer;
    }

    .icon:hover, .icon:active {
        opacity: 0.8;
    }

    @media (max-width: 949px) {
        .hamburguer {
            display: block;
        }
    }

`;