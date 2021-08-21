import { Link, BrowserRouter } from "react-router-dom";
import React from "react";
import List from "../pages/List";
import Home from "../pages/Home";

function Links() {
    return (
        <BrowserRouter>
            <ol>
                <li>
                    <Link to="/List" component={List}>List로 이동하기</Link>
                </li>
                <li>
                    <Link to="/" component={Home}>Home으로 이동하기</Link>
                </li>
            </ol>
        </BrowserRouter>
    )
}

export default Links;