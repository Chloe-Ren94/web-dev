import React from "react";

const PostItem = (
    {
        post = {
            "avatarIcon": "/images/newyork.jpg",
            "userName": "New York Post",
            "handle": "nypost",
            "time": "23h",
            "post": "Grimes seen reading Karl Marx following split with world's richest man Elon Musk <a href=\"https://trib.al/nx2Gfaq\" class=\"text-decoration-none\">trib.al/nx2Gfaq</a>",
            "image": "/images/newyork_tweet.jpg",
            "title": "",
            "text": "",
            "link": "",
            "reply": "965",
            "retweet": "2.4K",
            "like": "4K"
        }
    }) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="wd-avatar-img" src={post.avatarIcon}/>
                </div>
                <div className="col-11 ps-5 ps-sm-5 ps-md-4">
                    <div className="row">
                        <div className="col-11">
                           {post.userName} <i className="fas fa-check-circle"></i>
                           <span className="wd-fg-color-gray"> @{post.handle} · {post.time}</span>
                        </div>
                        <div className="col-1">
                           <a href="#" className="wd-fg-color-gray"><i className="fas fa-ellipsis-h"></i></a>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{__html:post["post"]}}></div>
                    <div className="border border-secondary wd-rounded-border mt-2">
                        <img className="wd-post-img" src={post.image}/>
                        {post.title &&
                            <div className="p-3 border-top border-secondary">
                                <div>{post.title}</div>
                                <div className="wd-text">{post.text}</div>
                                <span className="wd-fg-color-gray"><i className="fas fa-link "></i> {post.link}</span>
                            </div>}
                    </div>
                    <div className="row mt-3">
                        <div className="col-3">
                            <a className="text-decoration-none wd-fg-color-gray" href="#">
                            <i className="far fa-comment me-2"></i>{post.reply}</a>
                        </div>
                        <div className="col-3">
                            <a className="text-decoration-none wd-fg-color-gray" href="#">
                            <i className="fas fa-retweet me-2"></i>{post.retweet}</a>
                        </div>
                        <div className="col-3">
                            <a className="text-decoration-none wd-fg-color-gray" href="#">
                            <i className="far fa-heart me-2"></i>{post.like}</a>
                        </div>
                        <div className="col-3">
                            <a className="text-decoration-none wd-fg-color-gray" href="#">
                            <i className="far fa-share-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default PostItem;