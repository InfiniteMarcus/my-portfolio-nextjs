import css from 'styled-jsx/css'
import { darkTheme } from './theme';

export default css.global`
    
    html, body {
        height: 100%;
        margin: 0;
    }

    html {
        box-sizing: border-box;
        font-size: 1em;
        font-family: 'Trebuchet MS', sans-serif;
        color: ${darkTheme.text.color};
        scroll-behavior: smooth;
    }

    a {
        color: ${darkTheme.text.color};
    }

    .container {
        position: relative;
        min-height: 100vh;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        background-color: ${darkTheme.bg.primary};
        background: url('images/simple_dashed.png') repeat center;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    ol, ul {
        list-style: none;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${darkTheme.colors.secondary};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track-piece {
        background: ${darkTheme.bg.primary};
    }

    ::-webkit-scrollbar-thumb\:hover {
        background: ${darkTheme.colors.primary}; 
    }
`;