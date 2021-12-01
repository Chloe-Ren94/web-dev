import React from "react";
import NavigationItem from "./NavigationItem";
import navigations from "./navigations.json";

const NavigationSidebar = (
    {
        active = 'Home'
    }) => {
    return (
        <>
            <div className="list-group">
                {
                    navigations.map(navigation => {
                        return(<NavigationItem navigation={navigation} active={active}/>);
                    })
                }
                <a href="#"
                   className={`list-group-item ${active === 'More' ? 'active' : ''}`}>
                    <span className="fa-stack">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="d-none d-xl-inline-block ms-2">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="#" className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;