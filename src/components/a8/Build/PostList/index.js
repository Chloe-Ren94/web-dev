import React, {useEffect} from "react";
import PostItem from "./PostItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../services/twitterService";

const selectAllTweets = (state) => state.tweets;
const PostList = () => {
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [])

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