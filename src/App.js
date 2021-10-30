import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path="/a6/hello" component={HelloWorld}/>
              <Route path="/a6/twitter/home" component={HomeScreen}/>
              <Route path="/a6/twitter/explore" component={ExploreScreen}/>
              <Route path={["", "/a6", "/a6/practice"]} component={Practice} exact={true}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
