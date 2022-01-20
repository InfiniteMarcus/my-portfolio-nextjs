import css from 'styled-jsx/css'
import { darkTheme } from '../../styles/theme';

export default css`
    .card {
        width: 100%;
        text-align: center;
        max-width: 1000px;
        min-height: 250px;
    }

    .card:before {
        content: ''; 
        display: block; 
        position: relative; 
        width: 0; 
        height: 5em; 
        margin-top: 1.5em
    }

    header {
        margin-bottom: 50px;
        padding: 10px;
        max-width: 250px;
        border-bottom: 2px solid ${darkTheme.colors.primary};
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    h1 {
        font-size: 2.5em;
    }

    .cardBody {
        padding: 20px;
        font-size: 1.7em;
    }
`