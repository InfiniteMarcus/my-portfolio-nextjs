import css from 'styled-jsx/css'
import { darkTheme } from '../../styles/theme';

export default css`
    header {
        top: 0;
        position: fixed;
        background-color: ${darkTheme.colors.menu};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10;
        padding: 20px;
        border-bottom: 2px solid ${darkTheme.colors.primary};
    }

    .image {
        margin-left: 20px;
        opacity: 0.9;
    }

    .image:hover {
        opacity: 1;
    }

    .title {
        font-size: 1.5em;
    }

    .title a {
        text-decoration: none;
        color: ${darkTheme.text.color};
    }
`