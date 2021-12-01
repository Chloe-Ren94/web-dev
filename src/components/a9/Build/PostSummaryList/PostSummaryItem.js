import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        },
        sideBar = false
    }) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className={sideBar ? "col-9": "col-10"}>
                    <div className="wd-fg-color-gray">{post.topic}</div>
                    <div>
                        <span className="wd-font-bold">{post.userName} </span>
                        <i className="fas fa-check-circle"></i>
                        <span className="wd-fg-color-gray"> - {post.time}</span>
                    </div>
                    <div className="wd-font-bold">{post.title}</div>
                </div>
                <div className={sideBar ? "col-3": "col-2"}>
                    <img className="wd-summary-img float-end" src={post.image}/>
                </div>
            </div>
        </li>
    );
}
export default PostSummaryItem;