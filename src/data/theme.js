import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button, Modal, Select, Input, Box, Text } = chakraTheme.components;


const components = {
    Button,
    Modal,
    Select,
    Input,
    Box,
    Text
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
  
    }
  },

  textStyles: {
    h2: {

    },
   
  },
     
    components,
    breakpoints,
});

export default _theme;

