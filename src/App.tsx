import React from "react";

import { GlobalStyle, AppWrapper } from "./App.styles";

import Header from "./components/Header";
import TweetBox from "./components/TweetBox";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <TweetBox />
      </AppWrapper>
    </>
  );
}

export default App;
