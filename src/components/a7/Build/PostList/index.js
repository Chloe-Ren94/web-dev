import React from "react";
import PostItem from "./PostItem";
import {useSelector} from "react-redux";

const selectAllTweets = (state) => state.tweets;
const PostList = () => {
    const tweets = useSelector(selectAllTweets);
    return(
        <ul className="list-group mt-3">
            {
                tweets.map(tweet => {
                    return(<PostItem post={tweet}/>);
                })
            }
        </ul>
    );
}
export default PostList;