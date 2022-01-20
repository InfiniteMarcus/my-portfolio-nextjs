import css from 'styled-jsx/css'

export default css`
    img {
        max-width: 250px;
        width: 100%;
        height: auto;
        border-radius: 50%;
        margin-left: auto;
        margin-right: auto;
        padding: 2px;
        opacity: 0.9;
        transition: all 0.5s;
    }

    img:hover {
        opacity: 1;
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.5s;
    }
`;