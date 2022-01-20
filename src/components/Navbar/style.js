import css from 'styled-jsx/css'

export default css`

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
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
        filter: alpha(opacity=0);
    }
    
    @media (max-width: 950px) {
        ul {
            display: block;
            float: none;
            text-align: left;
        }
    }
`;