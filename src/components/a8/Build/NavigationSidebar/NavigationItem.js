import React from "react";
import {Link} from "react-router-dom";

const NavigationItem = (
    {
        navigation = { "icon": "fas fa-home", "text": "Home", "link": "/a7/twitter/home"},
        active = 'Home'
    }) => {
    return(
        <Link to={navigation.link}
           className={`list-group-item ${active === navigation.text ? 'active' : ''}`}>
           <i className={navigation.icon}></i>
           <span className="d-none d-xl-inline-block ms-2">{navigation.text}</span>
        </Link>
    )
}
export default NavigationItem;