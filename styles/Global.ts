import { createGlobalStyle } from 'styled-components'
import { ThemeContextType } from '../@types/contextType'

export default createGlobalStyle<ThemeContextType>`
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        color: ${props => props.theme.text};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 27px;
        font-weight: 700;
    }
    h3{
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 500;
    }
    p{
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 300;
    }
    span {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }
`