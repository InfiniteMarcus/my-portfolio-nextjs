import css from 'styled-jsx/css'
import { darkTheme } from '../../styles/theme';

export default css`

    li {
        margin: 10px;
        display: inline-block;
        width: auto;
        padding-right: 10px;
        padding-left: 10px;
        font-size: 22px;
        border-left: 2px solid ${darkTheme.colors.primary};
    }

    li :hover,
    :active
    {
        text-decoration: underline;
    }

    a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: ${darkTheme.text.color};
    }
`;