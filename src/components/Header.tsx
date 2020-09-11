import React from "react";

import { HeaderWrapper } from "../App.styles";
import TwitterLogo from "../images/Twitter_Logo_Blue.svg";

const Header = () => {
    return (
        <HeaderWrapper>
            <img src={TwitterLogo} alt="Twitter Logo" style={{height:"100%"}}/>
            <h1>Multimodal Analysis of #MeToo Tweets</h1>
        </HeaderWrapper>
    )
}

export default Header;