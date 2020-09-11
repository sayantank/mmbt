import React from "react";

import { TweetWrapper, TweetInput } from "../App.styles";

const TweetBox = () => {
    return (
        <TweetWrapper>
            <form style={{height: "99%"}}>
                <TweetInput name="tweet" placeholder="What's happening?" />
            </form>
        </TweetWrapper>
    )
}

export default TweetBox;