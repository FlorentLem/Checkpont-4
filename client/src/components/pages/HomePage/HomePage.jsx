import React from "react";

import HomeElementLeft from "../../elements/HomeElement/HomeElementLeft";
import HomeElementRight from "../../elements/HomeElement/HomeElementRight";


import "./HomePage.scss";

import bg from "./assets/bg-home.jpeg";

const Home = () => {
    return (
        <div className="homepage__globalContainer" style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="homepage__darkener" />
            <div className="homepage__left">
                <HomeElementLeft />
            </div>
            <div className="homepage__right">
                <HomeElementRight />
            </div>
        </div>
    )
}

export default Home;