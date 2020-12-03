import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none !important;
    list-style: none !important;
    outline: none !important;
  }

  html, body {
    position: relative;
    height: 100%;
    width: 100%;
    font-size: 100%;
  }

  body {
    font-family: "Roboto", sans-serif;
    line-height: 1.65;
    color: #e1e1e1;
    background-color: #6B6C6D;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Playfair Display", serif;
    color: #fff;
  }

  span {
    display: inline-block;
  }

  p {
    line-height: 1.65;
  }

  img {
    width: 100%;
    height: auto;
  }

  a,
  a:hover,
  a:focus {
    color: inherit;
  }
`
