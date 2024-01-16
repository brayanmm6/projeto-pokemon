import { createGlobalStyle }  from "styled-components"

const Styles = createGlobalStyle`
    :root {
        --color-red-100: #DE4A32;
        --color-red-200: #F52807;
        --color-red-300: #941500;
        --color-yellow-050: #F7DC6F;
        --color-yellow-100: #F4D03F;
        --color-yellow-200: #D8BF09;
        --color-yellow-300: #D8AF09;
        --color-green: #39B809;
        --color-blue-050: #7FB3D5;
        --color-blue-100: #098BB8;
        --color-blue-200: #0963B8;
        --color-blue-300: #0937BC;
        --color-blue-400: #200886;
        --color-blue-500: #140455;
        --color-blue-600: #0C0235; 
        --color-blue-700: #07011D;
        --color-purple-100: #AF71E7;
        --color-purple-200: #9F52E5;
        --color-purple-300: #8315E6;
        --color-pink: #E615BA;
        --color-white-glow: #FFFAE4;
        --transparent-grey: rgba( 89, 86, 93 , 0.5 );
        --transparent-blue: rgba( 9, 139, 184, 0.7 );
        --transparent-pink: rgba( 230, 21, 186, 0.4 );
        --transparent-white: rgba( 255, 255, 255, 0.3 );
        --transparent-black: rgba( 0, 0, 0, 0.5 );
        
        --color-night-gradient: linear-gradient(var(--color-blue-700), var(--color-blue-600), var(--color-blue-500), var(--color-purple-300), var(--color-purple-300));
        --color-day-gradient: linear-gradient( var(--color-blue-200), var(--color-blue-100), var(--color-blue-050), var(--color-blue-050), var(--color-blue-050), var(--color-yellow-050));
    }
    
    body{
        min-height: 100vh;
        width: 100%;
        padding: 20px 10%;
        gap: 20px;
        font-family: 'Chakra Petch', sans-serif;
        position: relative;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar{
        width: 20px;
        background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-pink);
        border: solid 5px;
        border-radius: 15px;
    }

    ::-webkit-scrollbar-track{
        background-color: black;
    }
`

export { Styles }