import css from 'styled-jsx/css'

export default css`
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        gap: 30px;
    }

    div:before {
        content: ''; 
        display: block; 
        position: relative; 
        width: 0; 
        height: 3em; 
        margin-top: 3em
    }
`