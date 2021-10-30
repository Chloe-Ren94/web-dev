import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";
import './ExploreScreen.css';

const ExploreComponent = () => {
    return(
        <>
            <div className="row pe-xxl-0">
                <div className="col-11">
                    <div className="input-group wd-search-border wd-bg-color-white">
                        <i className="fas fa-search align-self-center ps-3"></i>
                        <input className="form-control" placeholder="Search Twitter"/>
                    </div>
                </div>
                <div className="col-1 align-self-center">
                    <a href="#"><i className="fas fa-cog fa-2x"></i></a>
                </div>
            </div>
            
            <ul className="nav nav-tabs mt-2">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            
            <div className="position-relative mt-2 mb-2">
                <img className="img-fluid" src="/images/starship.jpg"/>
                <div className="wd-caption position-absolute start-0 bottom-0 ps-2 pb-1">SpaceX's Starship</div>
            </div>
        
            <PostSummaryList sideBar={false}/>
        </>
    );
}
export default ExploreComponent;