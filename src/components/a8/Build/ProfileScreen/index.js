import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList";
import PostSummaryList from "../PostSummaryList";
import React from "react";
import Profile from "./Profile";
import {useSelector} from "react-redux";
import EditProfile from "./EditProfile";

const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active='Profile'/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                {!profile.edit && <Profile/>}
                {profile.edit && <EditProfile/>}
                <div className="wd-relative-up">
                    <PostList />
                </div>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title="What's happening" sideBar={true}/>
            </div>
        </div>
    );
}
export default ProfileScreen;