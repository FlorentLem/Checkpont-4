import axios from "axios";
import React, { useState, useEffect } from "react";

import GalleryLeft from "../../elements/GalleryElement/GalleryLeft";
import GalleryRight from "../../elements/GalleryElement/GalleryRight";

import "./Gallery.scss";

const Gallery = () => {
    const [projets, setProjets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:8000/api/projets");
            setProjets(res.data.data);
        }
        fetchData();
    }, []);
    console.log(projets)
    return (
        <div style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(240, 240, 240)"
        }}>
            <div className="gallery__globalContainer">
                <div className="gallery__left">
                    <GalleryLeft />
                </div>
                <div className="gallery__right">
                    <GalleryRight projetData={projets} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;