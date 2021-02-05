import React from "react";
import { Link } from "react-router-dom";

import './GalleryLeft.scss';

import svg1 from "./assets/svg1.svg";


const GalleryLeft = () => {
    return (
        <div className="galleryLeft__globalContainer">
            <h1>Mes projets !</h1>
            <p>Vous pouvez retrouver ici mes différents projets réaliser durant ma carrière de Développeur Web</p>
            <h2>Intéréssez ?</h2>
            <Link to="/contact">
                <button>Contactez moi</button>
            </Link>
            <div className="galleryLeft__svg" style={{
                backgroundImage: `url(${svg1})`
            }} />
        </div>
    );
}

export default GalleryLeft;