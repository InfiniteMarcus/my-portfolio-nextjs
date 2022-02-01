import css from 'styled-jsx/css'

export default css`

    a {
        max-width: 100px;
        margin-left: auto;
        margin-right: auto;
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        opacity: 0.85;
        transition: all 0.5s;
    }

    img:hover {
        opacity: 1;
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.5s;
    }
`;