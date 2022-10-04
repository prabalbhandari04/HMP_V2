import { createGlobalStyle } from 'styled-components'
import { ThemeContextType } from '../@types/contextType'

export default createGlobalStyle<ThemeContextType>`
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        color: ${props => props.theme.text};
        background: ${props => props.theme.body};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 72px;
        font-weight: 700;
    }
    h2{
        font-family: 'Poppins', sans-serif;
        font-size: 27px;
        font-weight: 500;
    }
    h3{
        font-family: 'Poppins', sans-serif;
        font-size: 21px;
        font-weight: 500;
    }
    p{
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 300;
        opacity: 0.8;
    }
    span {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    @media (max-width: 800px) {
        h1{
            font-size: 45px;
        }
        h2{
            font-size: 21px;
        }
        h3{
            font-size: 18px;
        }
        p{
            font-size: 14px;
        }
        span {
            font-size: 14px;
        }
    }
    @media (max-width: 425px) {
        h1{
            font-size: 36px;
        }
        h2{
            font-size: 18px;
        }
        h3{
            font-size: 16px;
        }
        p{
            font-size: 12px;
        }
        span {
            font-size: 12px;
        }
    }
`