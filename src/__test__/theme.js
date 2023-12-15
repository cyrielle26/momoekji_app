import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button, Modal, Select, Input,Box, Text } = chakraTheme.components;


const components = {
    Button,
    Modal,
    Select,
  Input,
  Box,
    Text,
};

 

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};
  



const _theme = extendBaseTheme({
    fonts:{
    body: `'Fira Code', sans-serif`,
  },
  styles:{
    global:{
      'body':{
         color: '#2B2B2B',
         fontSize: '18px',
        bg: "#F9F9F9"
      },
  
    }
  },

  textStyles: {
    h2: {
      // you can also use responsive styles
      fontSize: ['18px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
   
  },
     
    components,
    breakpoints,
});

export default _theme;
