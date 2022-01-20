import css from 'styled-jsx/css'

export default css`

    nav {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row-reverse;
    }

    .visible {
        max-height: 500px;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        opacity: 1;
        filter: alpha(opacity=100);
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
    }

    @media (max-width: 950px) {
        ul {
            display: none;
        }
    }
`;