import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import A6 from "./components/a6";
import Practice from "./components/a6/Practice";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a6", "/a6/hello"]} exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/practice" exact={true}>
                    <A6/>
                    <Practice/>
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
