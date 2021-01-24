import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Karla:wght@200&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');

    ${'' /* font-family: 'Varela Round'; */}
    font-family: 'Red Hat Display', sans-serif;

  }
`;

export default GlobalStyle;