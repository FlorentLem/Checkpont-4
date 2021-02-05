import React from "react";
import { Link } from "react-router-dom";
import { FaRegFolderOpen } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";

import "./HomeElementLeft.scss";

const HomeElementLeft = () => {
    return (
        <div className="homeElLeft__container">
            <h1><FaRegFolderOpen /> MyFolio</h1>
            <h2>Welcome !</h2>
            <p>Accéder à la galerie pour voir mes projets :)</p>
            <Link to="/gallery">
                <button>
                    <AiFillPicture /> Gallery
                </button>
            </Link>
        </div>
    )
}

export default HomeElementLeft;
