import React from "react";
import posts from './posts.json';
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = (
    {
        sideBar = false
    }) => {
    return(
        <ul className="list-group">
            {
                posts.map(post => {
                    return(<PostSummaryItem post={post} sideBar={sideBar}/>);
                })
            }
        </ul>
    );
}
export default PostSummaryList;