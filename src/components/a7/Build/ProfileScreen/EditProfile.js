import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const EditProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const date = new Date(profile.dateOfBirth).toLocaleDateString('fr-CA');
    const [birthday, setBirthday] = useState(date);

    const nameChangeHandle = (event) => {
        setName(event.target.value);
    }
    const bioChangeHandle = (event) => {
        setBio(event.target.value);
    }
    const locationChangeHandle = (event) => {
        setLocation(event.target.value);
    }
    const websiteChangeHandle = (event) => {
        setWebsite(event.target.value);
    }
    const birthdayChangeHandle = (event) => {
        setBirthday(event.target.value);
    }

    const clickSaveHandle = () => {
        dispatch({
            type: 'click-save',
            profile: {
                ...profile,
                name,
                bio,
                location,
                website,
                dateOfBirth: new Intl.DateTimeFormat('en-US').format(new Date(birthday + 'T00:00:00'))
            }
        })
    }
    const clickCancelHandle = () => {
        dispatch({
            type: 'click-cancel'
        })
    }

    return(
        <div>
            <div>
                <span className="ps-3 me-2">
                    <i className="fas fa-times text-white" onClick={clickCancelHandle}></i>
                </span>
                <span className="ms-4 wd-profile-name">
                    Edit profile
                </span>
                <button className="btn rounded-pill float-end text-black bg-white me-3"
                        style={{fontWeight: "bold"}}
                        onClick={clickSaveHandle}>
                    Save
                </button>
            </div>
            <div className="mt-3">
                <img className="wd-banner-pic" src={profile.bannerPicture}/>
                <img className="wd-profile-pic" src={profile.profilePicture}/>
            </div>
            <div className="mt-2 ps-3 pe-3 wd-relative-up">
                <div className="border border-secondary rounded p-2">
                    <div>Name</div>
                    <input className="form-control ps-0 text-white bg-black"
                           value={name}
                           onChange={nameChangeHandle}/>
                </div>
                <div className="border border-secondary rounded p-2 mt-4">
                    <div>Bio</div>
                    <textarea className="form-control ps-0 text-white bg-black"
                              style={{resize: "none"}}
                              value={bio}
                              onChange={bioChangeHandle}>
                    </textarea>
                </div>
                <div className="border border-secondary rounded p-2 mt-4">
                    <div>Location</div>
                    <input className="form-control ps-0 text-white bg-black"
                           value={location}
                           onChange={locationChangeHandle}/>
                </div>
                <div className="border border-secondary rounded p-2 mt-4">
                    <div>Website</div>
                    <input className="form-control ps-0 text-white bg-black"
                           value={website}
                           onChange={websiteChangeHandle}/>
                </div>
                <div className="border border-secondary rounded p-2 mt-4">
                    <div>Birthday</div>
                    <input className="form-control" type="date" value={birthday}
                           onChange={birthdayChangeHandle}/>
                </div>
            </div>
        </div>
    )
}
export default EditProfile;