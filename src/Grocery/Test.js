import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Home= () =><h1>home</h1>
function Test(){
    return (
        <Router>
            <div>
            <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
            </nav>
            </div>
            <Route path="/" exact component={Home} />
        </Router>)
}

export default Test