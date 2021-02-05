import React from "react";
import { Link } from "react-router-dom";

import "./GalleryRight.scss";

const GalleryRight = ({ projetData }) => {
    return (
        <div className="galleryRight__globalContainer">
            {
                projetData.map((el) => (
                    <Link to={`/projet/${el.id}`}>
                        <div className="galleryRight__projetBg" style={{
                            backgroundImage: `url("http://localhost:8000/images/${el.picture.name}")`
                        }}>
                            <div className="galleryRight__darkener">
                                <h3>{el.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default GalleryRight;