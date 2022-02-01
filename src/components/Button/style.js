import css from 'styled-jsx/css'
import { darkTheme } from '../../styles/theme';

export default css`

    a {
        color: ${darkTheme.text.color};
        text-decoration: none;
    }
    
    button {
        background-color: ${darkTheme.colors.primary};
        cursor: pointer;
        padding: 20px;
        font-size: 1em;
        font-family: 'Trebuchet MS', sans-serif;
        border-radius: 1rem;
        border: none;
        color: ${darkTheme.text.color};
        transition: 0.2s;
        opacity: 0.8;
    }

    button:hover, button:active {
        opacity: 1;
    }
`