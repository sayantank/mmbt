import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        height: 100%;
    }

    #root {
        height: 100%;
    }

    * {
        font-family: 'Nunito', sans-serif;
        color: #1da1f2;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 24px;
    height: 54px;
    width: 100%;
    margin: 10px;

    > h1 {
        font-size: 28px;
        font-weight: 800;
        margin: 0;
        padding-top: 10px;
    }
`;

export const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 75%;
    height: 100%;
    background-color: #000;
`;

export const TweetWrapper = styled.div`
    border: solid 1px #1da1f2;
    border-radius: 5px;
    height: 196px;
    width: 50%;
    margin-top: 28px;
`

export const TweetInput = styled.textarea`
    width: 99%;
    height: 70%;
    padding: 10px;
    margin: 2px;
    font-size: 24px;
    color: #14171a;
    border: none;
    overflow-y: auto;
    resize: none;

    &:focus {
        border: none;
        outline: none;
    }
`