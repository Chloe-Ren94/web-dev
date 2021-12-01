import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.jpg',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(
        <li className="list-group-item">
            <div className="row pe-xl-3 pe-xxl-0">
                <div className="col-2">
                    <img className="wd-avatar-img" src={who.avatarIcon}/>
                </div>
                <div className="col-lg-6 col-xl-7 ps-3 pe-0 text-nowrap">
                    <div>
                        <span className="wd-font-bold">{who.userName} </span>
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-lg-4 col-xl-3 align-self-center">
                    <button className="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;