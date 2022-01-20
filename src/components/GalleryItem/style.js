import css from 'styled-jsx/css'
import { darkTheme } from '../../styles/theme';

export default css`
    .gallery-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        background-color: ${darkTheme.colors.menu};
        border-radius: 1.2rem;
        padding: 20px;
        flex: 1 1;
        transition: all 0.5s;
    }

    .gallery-item:hover {
        background-color: ${darkTheme.colors.menuhover};
        transform: scale(1.05);
        transition: all 0.5s;
        cursor: pointer;
    }

    .gallery-item-title {
        margin-bottom: 10px;
    }

    .gallery-item-description {
        letter-spacing: 0.12rem;
        font-size: 20px;
    }

    .gallery-item-tech {
        padding: 0 15px 0 15px;
        font-size: 1rem;
        color: gray;
        position: absolute;
        bottom: 0;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
`;