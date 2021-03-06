import css from 'styled-jsx/css'
import { darkTheme } from '../../styles/theme';

export default css`
    .card {
        width: 100%;
        text-align: center;
        max-width: 1000px;
        min-height: 250px;
    }

    header {
        margin-bottom: 30px;
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

    .card-body {
        padding: 20px;
        font-size: 1.7em;
    }

    .card-text {
        margin-bottom: 40px;
    }

    .card-container {
        display: flex;
        margin-right: auto;
        margin-left: auto;
        justify-content: center;
        gap: 20px;
    }

    @media (max-width: 768px) {
        .card-container{
            flex-direction: column;
        }
    }
`