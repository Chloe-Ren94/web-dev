import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld6 from "./components/a6/HelloWorld";
import HelloWorld7 from "./components/a7/HelloWorld";
import HelloWorld8 from "./components/a8/HelloWorld";
import Practice6 from "./components/a6/Practice";
import Practice7 from "./components/a7/Practice";
import Practice8 from "./components/a8/Practice";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import Build7 from "./components/a7/Build";
import Build8 from "./components/a8/Build";
import A8 from "./components/a8";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a8", "/a8/hello"]} exact={true}>
                    <HelloWorld8/>
                </Route>
                <Route path="/a8/practice" exact={true}>
                    <A8/>
                    <Practice8/>
                </Route>
                <Route path="/a8/twitter">
                    <Build8/>
                </Route>
                <Route path={["/a7", "/a7/hello"]} exact={true}>
                    <HelloWorld7/>
                </Route>
                <Route path="/a7/practice" exact={true}>
                    <Practice7/>
                </Route>
                <Route path="/a7/twitter">
                    <Build7/>
                </Route>
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld6/>
                </Route>
                <Route path="/a6/practice" exact={true}>
                    <Practice6/>
                </Route>
                <Route path="/a6/twitter/explore" exact={true}>
                    <ExploreScreen/>
                </Route>
                <Route path="/a6/twitter/home" exact={true}>
                    <HomeScreen/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
