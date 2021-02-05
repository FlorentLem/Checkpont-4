import React from "react";
import { Link } from "react-router-dom";

import { SiJavascript, SiMysql } from "react-icons/si"
import { FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import me from "./assets/Florent.jpg";

import "./HomeElementRight.scss";

const HomeElementRight = () => {
    return (
        <div className="homeElRight__container">
            <div className="homeElRight__img" style={{
                backgroundImage: `url(${me})`
            }} />
            <h1>Qui-suis je ?</h1>
            <p className="homeElRight__about">
                Je suis un jeune développeur web, tous droit sortit de la Wild Code School, je suis passioné par la confection de sites design et innovant.
                <br />
                <br />
                Spécialisé en ReactJs et NodeJs, je compte évoluer dans une carrière de développeur web Full Stack. Ce portfolio me permet de démontrer mes capacités en dev.
            </p>
            <p className="homeElRight__lang">
                Langages utilisées :
                <span>
                    <SiJavascript />
                    <FaReact />
                    <AiFillHtml5 />
                    <FaCss3Alt />
                    <FaNodeJs />
                    <SiMysql />
                </span>
            </p>
            <div style={{
                width: "100%",
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Link to="/contact">
                    <button>
                        <MdEmail /> Contactez Moi
                </button>
                </Link>
            </div>
        </div>
    )
}

export default HomeElementRight;
