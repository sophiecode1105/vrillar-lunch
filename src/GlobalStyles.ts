import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
    ${reset}
    *{

        box-sizing: border-box;
    
    }
    
    html, body {
        background: black;
        text-align: center;
    }   
`;

export default GlobalStyles;
