import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --dark-blue: #363f5f;
        --green: #249225;
        --light-dark: #333;
        --light-green: #1fd655;
        --light-white: #f0f2f5;
        --red: #e92929;
        --steel-blue: #4682b4;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080) {
            font-size: 93.75%;
        }

        @media (max-width: 720) {
            font-size: 87.5%;
        }
    }
    
    body {
        background: var(--light-dark);
        -webkit-font-smoothing: antialiased;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--light-dark);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close {
        font-size: 1.5rem;
        font-weight: bold;
        position: absolute;;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            cursor: pointer;
            filter: brightness(0.8);
        }
    }
`;