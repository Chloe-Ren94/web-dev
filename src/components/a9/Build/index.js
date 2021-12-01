import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import who from "./reducers/who";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import tweets from "./reducers/tweets";
import ProfileScreen from "./ProfileScreen";
import profile from "./reducers/profile";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/", "/a9/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a9/twitter/explore" exact={true} component={ExploreScreen}/>
                <Route path="/a9/twitter/profile" exact={true} component={ProfileScreen}/>
            </div>
        </Provider>
    );
};
export default Build;