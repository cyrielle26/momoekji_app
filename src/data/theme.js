import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button, Modal, Select, Input, Box, Text } = chakraTheme.components;


const components = {
    Button,
    Select,
    Input,
    Box,
  Text,
Modal
};

 

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};
  



const _theme = extendTheme({
    fonts:{
    body: `'Fira Code', sans-serif`,
  },
  styles:{
    global:{
      'body':{
        color: '#F9F9F9',
        fontSize: '18px',
        bg: "#2B2B2B",
        fontWeight: 'semibold',
      },
      '::-webkit-scrollbar': {
      w: '0.5rem',
      bgColor: '#404040',
    },
   '::-webkit-scrollbar-thumb': {
     bgColor: '#222222',
    },
 
    }
  },
  component: {
  Modal: {
    sizes: {
      xl: {
        h: "600px",
        w: '1000px',
      },
    }
  }},

   
    components,
    breakpoints,
});

export default _theme;

