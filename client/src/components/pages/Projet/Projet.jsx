import React from "react";
import axios from "axios";

import { SiJavascript } from "react-icons/si"
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";

import './Projet.scss';

class Projet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projet: {},
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        axios.get(`http://localhost:8000/api/projets/${this.props.match.params.id}`)
            .then((response) => response.data)
            .then((data) => {
                this.setState({
                    projet: data.data
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        const { projet } = this.state;
        console.log(Object.keys(projet).length);
        return (
            <div className="projet__globalContainer">
                <div className="projet__right">
                    <div className="projet__title">
                        <h1>{projet.title}</h1>
                        {
                            Object.keys(projet).length !== 0 ? (
                                <div className="projet__image" style={{
                                    backgroundImage: `url("http://localhost:8000/images/${projet.picture.name}")`
                                }} />
                            ) : ("")
                        }
                        <div />
                    </div>
                </div>
                <div className="projet__left">
                    <div className="projet__intro">
                        <h2> Description: </h2>
                        <p>{projet.description}</p>
                        <h3>Langages utilisés :</h3>
                        <ul>
                            {
                                Object.keys(projet).length !== 0 ? projet.langages.map((el) => (
                                    <li>
                                        {el.name === "JavaScript" ? <SiJavascript /> :
                                            el.name === "SCSS" ? <FaCss3Alt /> :
                                                el.name === "NodeJs" ? <FaNodeJs /> :
                                                    el.name === "ReactJs" ? <FaReact /> :
                                                        el.name === "HTML" ? <FaHtml5 /> : ""}
                                    </li>
                                )) : ""
                            }
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}



export default Projet;
