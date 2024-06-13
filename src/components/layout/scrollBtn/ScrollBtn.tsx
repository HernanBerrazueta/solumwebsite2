import React from "react";
// import NavigationSharpIcon from "@mui/icons-material/NavigationSharp";
import { NavigationSharpIconStyled, ScrollBtnStyled } from "./ScrollBtn.styled";

interface ClickProp {
  handleScrollToTop: () => void;
}

const ScrollBtn: React.FC<ClickProp> = ({ handleScrollToTop }) => {
  return (
    <div>
      <ScrollBtnStyled onClick={handleScrollToTop}>
        <NavigationSharpIconStyled />
      </ScrollBtnStyled>
    </div>
  );
};

export default ScrollBtn;
