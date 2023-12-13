import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const MainColor = {
  whiteColor: "#F9F9F9",
  brownColor: "#DD9F64",
  blackColor: "##2B2B2B"
};

export const GlobalStyled = createGlobalStyle`
//add the reset package
${reset}

//edit the GlobalStyled content
*{
    box-sizing: border-box;
}
body{

color: ${MainColor.whiteColor};
letter-spacing: 1px;
word-break:break-word;
}

ul, li {
    list-style: none;
}
a{
    text-decoration:none;
    color: ${MainColor.whiteColor};
}
`;
