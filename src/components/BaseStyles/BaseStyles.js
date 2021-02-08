import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-Bold.woff2') format('woff2'),
          url('/fonts/lato/Lato-Bold.woff') format('woff'),
          url('/fonts/lato/Lato-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-Thin.woff2') format('woff2'),
          url('/fonts/lato/Lato-Thin.woff') format('woff'),
          url('/fonts/lato/Lato-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-Black.woff2') format('woff2'),
          url('/fonts/lato/Lato-Black.woff') format('woff'),
          url('/fonts/lato/Lato-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-Light.woff2') format('woff2'),
          url('/fonts/lato/Lato-Light.woff') format('woff'),
          url('/fonts/lato/Lato-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
 /*  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-Italic.woff2') format('woff2'),
          url('/fonts/lato/Lato-Italic.woff') format('woff'),
          url('/fonts/lato/Lato-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  } */
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-Regular.woff2') format('woff2'),
          url('/fonts/lato/Lato-Regular.woff') format('woff'),
          url('/fonts/lato/Lato-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-ThinItalic.woff2') format('woff2'),
          url('/fonts/lato/Lato-ThinItalic.woff') format('woff'),
          url('/fonts/lato/Lato-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-BoldItalic.woff2') format('woff2'),
          url('/fonts/lato/Lato-BoldItalic.woff') format('woff'),
          url('/fonts/lato/Lato-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-LightItalic.woff2') format('woff2'),
          url('/fonts/lato/Lato-LightItalic.woff') format('woff'),
          url('/fonts/lato/Lato-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/lato/Lato-BlackItalic.woff2') format('woff2'),
          url('/fonts/lato/Lato-BlackItalic.woff') format('woff'),
          url('/fonts/lato/Lato-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }
 */

  /* Normalize */

  * {
    font-family: ${({ theme }) => theme.font.family.primary};
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  ol, ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    outline: none;
  }

  a {
    color: inherit;
  }
`;

export default BaseStyles;
