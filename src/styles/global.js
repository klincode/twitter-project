import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing:border-box;
}
body {
  margin:0;
  padding:0;
  font-family:'Roboto';
  font-size:15px;
  /* background-image: */
}
a:link,a:visited,a:active {
color:#1da1f3;
}

`
export default GlobalStyle