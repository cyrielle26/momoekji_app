import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { ChakraProvider , CSSReset} from '@chakra-ui/react';
import _theme from './data/theme';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={_theme}>    
      <CSSReset/>
      <Router/>
    </ChakraProvider>
  </React.StrictMode>
);

