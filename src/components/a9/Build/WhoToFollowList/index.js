import React, {useEffect} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllWho} from "../services/whoService";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    const dispatch = useDispatch();
    useEffect(() => fetchAllWho(dispatch), []);

    return(
        <ul className="list-group">
            <li className="list-group-item wd-font-bold">Who to follow</li>
            {
                who.map(user => {
                    return <WhoToFollowListItem who={user}/>;
                })
            }
        </ul>
    );
}
export default WhoToFollowList;