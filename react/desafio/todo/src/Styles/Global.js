import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #CA3E4A;
        --white: #FDE7EA;
        --blue: #183355;
        --button-red: ##F8433F;
        --dashboard: #363F5F;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
     }   

    // default font-size: 16px === 1rem; (Desktop)
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }
    body {
        -webkit-font-smoothing: antialiased;
        background-image: 
        linear-gradient(135deg, rgba(149,54,71,1) 29%, 
        rgba(25,42,68,1) 100%);
        background-repeat: no-repeat;
        background-size: cover;

    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong, b {
        font-weight: 600;
    }
    button { 
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;