import React from "react";
import posts from './posts.json';
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = (
    {
        title = '',
        sideBar = false
    }) => {
    return(
        <ul className="list-group">
            {
                title &&
                <li className="list-group-item"
                    style={{fontSize: 24, fontWeight: "bold"}}>
                    {title}
                </li>
            }
            {
                posts.map(post => {
                    return(<PostSummaryItem post={post} sideBar={sideBar}/>);
                })
            }
        </ul>
    );
}
export default PostSummaryList;