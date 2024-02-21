import { createGlobalStyle } from 'styled-components'
import { slideIn } from './animations/SlideRight';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  html,
  body {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    cursor: url('/icons/cursor.png') 20 20, auto;
  }

  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
  }

  * {
    user-select: none !important;
  }

  p, a, h1, h2, button {
    color: #FFF;
  }

  .slideRight {
    animation: ${slideIn} .5s ease-out;
  }

  .hover-yellow {
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: #FFE08F;
      color: #000;
    }
  }

  .hover-lighter {
    transition: box-shadow 0.4s ease-in-out;

    &:hover {
      box-shadow: inset 1px 1px 6px 1px rgba(255, 255, 255, 0.80), 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
  }
`;

export default GlobalStyles;