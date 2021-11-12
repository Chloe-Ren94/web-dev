import React from "react";
import {useSelector} from "react-redux";

const Hello = () => {
    const message = useSelector((state) => state.hello);
    return(
        <h2>{message}</h2>
    )
}
export default Hello;