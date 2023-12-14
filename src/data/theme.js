import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button, Modal, Select, Input } = chakraTheme.components;

const components = {
    Button,
    Modal,
    Select,
    Input,
};

;

const fonts = {
    fonts: {
        heading: `'Fira Code', sans-serif`,
        body: `'Fira Code', sans-serif`,
        textStyles: {
            h1: {
                // you can also use responsive styles
                fontSize: ['45px'],
                fontWeight: 'bold',
                lineHeight: '110%',
                letterSpacing: '-2%',
            },
            h2: {
                fontSize: ['22px'],
                fontWeight: 'semibold',
                lineHeight: '110%',
                letterSpacing: '-1%',
            },
            h3: {
                fontSize: ['20px'],
                fontWeight: 'semibold',
                lineHeight: '110%',
                letterSpacing: '-1%',
            },
            h4: {
                fontSize: ['18px'],
                fontWeight: 'semibold',
                lineHeight: '110%',
                letterSpacing: '-1%',
            }
        },
    },
};
    
const colors = {
    colors: {
        white: "#F9F9F9",
        brown: "#DD9F64",
        black: "##2B2B2B",     
    },
    
}

const _theme = extendBaseTheme({
     styles: {
    global: {
      'html, body': {
            color: colors.black,
            height: "100vh",
         innerWidth: "100vw"
    
        
      },
      a: {
        color: colors.brown,
      },
        },
         

    },
    components,
    fonts,
    colors,
});

export default _theme;
