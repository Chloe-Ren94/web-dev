import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import PostItem from "./components/a6/Build/PostList/PostItem";
import PostList from "./components/a6/Build/PostList";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
