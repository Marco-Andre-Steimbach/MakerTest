import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    outline: none;
  }
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  body {
    line-height: 1;
  }
  
  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  :root {
    --primary-color: #FF577F;
    --primary-color-Focus: #FF427F;
    --primary-color-Negative: #59323F;
  
    --grey-color0: #F8F9FA;
    --grey-color1: #868E96;
    --grey-color2: #343B41;
    --grey-color3: #212529;
    --grey-color4: #121214;

    --feedBack-colorS: #3FE864;
    --feedBack-colorN: #E83F5B;
  
    --tittle1-Size: 16px;
    --tittle1-Weight: bold;
    --tittle2-Size: 16px;
    --tittle2-Weight: bold;
    --tittle3-Size: 16px;
    --tittle3-Weight: bold;
  
    --Headline: 12px;
    --Headline-Bold: Bold;
    --Headline-Italic: Italic;
  }

  body{
    background-color: var(--grey-color4);
  }
`;
