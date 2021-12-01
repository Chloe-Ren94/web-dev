import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../services/profileService";

const Profile = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    useEffect(() => fetchProfile(dispatch), []);
    const clickEditHandle = () => {
        dispatch({type: 'click-edit'})
    }
    return(
        <>
            <div className="row ps-3">
                <div className="col-1 align-self-center">
                    <a href="#"><i className="fas fa-arrow-left text-white"></i></a>
                </div>
                <div className="col-11 ps-3">
                    <div className="wd-profile-name">{profile.name}</div>
                    <div>{profile.tweets} Tweets</div>
                </div>
            </div>
            <div className="mt-1">
                <img className="wd-banner-pic" src={profile.bannerPicture}/>
                <img className="wd-profile-pic" src={profile.profilePicture}/>
                <button className="btn rounded-pill border text-white float-end mt-2 me-3"
                        style={{fontWeight: "bold"}}
                        onClick={clickEditHandle}>
                    Edit profile
                </button>
            </div>
            <div className="wd-relative-up ps-3">
                <div className="wd-profile-name">{profile.name}</div>
                <div>@{profile.handle}</div>
                <div className="text-white mt-2">{profile.bio}</div>
                <div className="mt-2">
                    {
                        profile.location &&
                        <span className="me-3 text-nowrap">
                            <i className="fas fa-map-marker-alt pe-1"></i>{profile.location}
                        </span>
                    }
                    {
                        profile.website &&
                        <span className="me-3 text-nowrap">
                            <i className="fas fa-link pe-1"></i>
                            <a href={profile.website}>
                                <span className="wd-profile-link">{profile.website}</span>
                            </a>
                        </span>
                    }
                    {
                        profile.dateOfBirth &&
                        <span className="me-3 text-nowrap">
                            <i className="fas fa-birthday-cake pe-1"></i>Born {profile.dateOfBirth}
                        </span>
                    }
                    <span className="text-nowrap">
                        <i className="far fa-calendar-alt pe-1"></i>Joined {profile.dateJoined}
                    </span>
                </div>
                <div className="mt-2">
                    <span className="text-white">{profile.followingCount}</span> Following
                    <span className="text-white ms-3">{profile.followersCount}</span> Followers
                </div>
            </div>
        </>
    )
}
export default Profile;