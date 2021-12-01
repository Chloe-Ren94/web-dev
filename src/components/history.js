import {Link} from "react-router-dom";
import React from "react";

const History = () => {
    return (
        <div>
            <h2>Non React.js Assignments</h2>
            <h3>Assignment 2</h3>
            <ul>
                <li><a href="/a2/practice/index.html">HTML Practice</a></li>
                <li><a href="/a2/twitter/navigation.html">Twitter clone</a></li>
                <li><a href="/a2/practice/iframe/index.html">Iframes</a></li>
            </ul>
            <h3>Assignment 3</h3>
            <ul>
                <li><a href="/a3/practice/css/index.html">CSS Practice</a></li>
                <li><a href="/a3/twitter/navigation.html">Twitter clone</a></li>
                <li><a href="/a3/twitter/explore/explore.html">explore.html</a></li>
                <li><a href="/a3/challenge/index.html">CSS Challenge</a></li>
            </ul>
            <h3>Assignment 4</h3>
            <ul>
                <li><a href="/a4/practice/bootstrap/index.html">Bootstrap Practice</a></li>
                <li><a href="/a4/twitter/navigation.html">Twitter clone</a></li>
                <li><a href="/a4/twitter/explore/explore.html">explore.html</a></li>
                <li><a href="/a4/challenge/explore/explore.html">Boostrap Challenge</a></li>
            </ul>
            <h3>Assignment 5</h3>
            <ul>
                <li><a href="/a5/practice/js/index.html">JavaScript & Console Practice</a></li>
                <li><a href="/a5/practice/jquery/index.html">jQuery Practice</a></li>
                <li><a href="/a5/practice/todos/index.html">ToDoList Practice</a></li>
                <li><a href="/a5/twitter/ExploreScreen/explore.html">A5 Practice ExploreScreen</a></li>
                <li><a href="/a5/twitter/HomeScreen/home.html">A5 Challenge HomeScreen</a></li>
            </ul>

            <h2>React.js Assignments</h2>
            <h3>Assignment 6</h3>
            <ul>
                <li>
                    <Link to="/a6/practice">React Practice</Link>
                </li>
                <li>
                    <Link to="/a6/twitter/explore">A6 Practice ExploreScreen</Link>
                </li>
                <li>
                    <Link to="/a6/twitter/home">A6 Challenge HomeScreen</Link>
                </li>
            </ul>
            <h3>Assignment 7</h3>
            <ul>
                <li>
                    <Link to="/a7/practice">Redux Practice</Link>
                </li>
                <li>
                    <Link to="/a7/twitter/explore">A7 ExploreScreen</Link>
                </li>
                <li>
                    <Link to="/a7/twitter/home">A7 HomeScreen</Link>
                </li>
                <li>
                    <Link to="/a7/twitter/profile">A7 Challenge ProfileScreen</Link>
                </li>
            </ul>
            <h3>Assignment 8</h3>
            <ul>
                <li>
                    <Link to="/a8/practice">Node Practice</Link>
                </li>
                <li>
                    <Link to="/a8/twitter/explore">A8 ExploreScreen</Link>
                </li>
                <li>
                    <Link to="/a8/twitter/home">A8 HomeScreen</Link>
                </li>
                <li>
                    <Link to="/a8/twitter/profile">A8 Challenge ProfileScreen</Link>
                </li>
            </ul>
        </div>
    )
}

export default History;