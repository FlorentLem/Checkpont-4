import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

import { FaRegFolderOpen, FaUserAlt } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import "./Dashboard.scss";

const Dashboard = ({ auth, logoutUser }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [langageOne, setLangageOne] = useState("");
    const [langageTwo, setLangageTwo] = useState("");
    const [langageThree, setLangageThree] = useState("");

    const uploadImage = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const postProjet = () => {
        const data = new FormData();
        data.append("file", selectedFile);
        axios.post("http://localhost:8000/api/pictures/add", data)
            .then((res) => res.data)
            .then((res => {
                const projetsData = {
                    title: title,
                    description: description,
                    langages: [langageOne, langageTwo, langageThree],
                    name: res.filename,
                };
                axios
                    .post("http://localhost:8000/api/projets/add", projetsData)
                    .then((resTwo) => resTwo.data)
                    .then(() => {
                        alert('Projet créé');
                        window.location.reload()
                    })
                    .catch((err) => {
                        alert(err);
                    })
            }))
            .catch((err) => {
                alert(err);
            })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert('Veuillez renseinger un titre et une description')
        } else {
            postProjet();
        }
    }

    return (
        <div className="dashboard__globalContainer">
            <div className="dashboard__left">
                <div className="dashboard__navigation">
                    <h1><FaRegFolderOpen /> MyFolio</h1>
                    <ul>
                        <Link to="/admin/dashboard/profil">
                            <li>
                                <FaUserAlt />
                                <p style={{
                                    paddingLeft: "30px"
                                }}>
                                    Voir votre profil
                                </p>
                            </li>
                        </Link>
                        <Link to="/admin/dashboard">
                            <li>
                                <AiFillFileAdd />
                                <p style={{
                                    paddingLeft: "30px"
                                }}>
                                    Poster un nouveau projet
                                </p>
                            </li>
                        </Link>
                    </ul>
                    <button type="button"
                        className="btn-logout"
                        onClick={() => {
                            logoutUser();
                        }}> Déconnexion
                </button>
                </div>
            </div>
            <div className="dashboard__right">
                <form className="dashboard__form" noValidate onSubmit={onSubmit}>
                    <input placeholder="Entrer un titre" value={title} type="text" onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                    <textarea placeholder="Entrer une description" value={description} onChange={(e) => {
                        setDescription(e.target.value);
                    }} />
                    <div className="wrapper-select">
                        <select value={langageOne} onChange={(e) => {
                            setLangageOne(e.target.value);
                        }}>
                            <option value="JavaScript">JavaScript</option>
                            <option value="NodeJs">NodeJs</option>
                            <option value="ReactJs">ReactJs</option>
                            <option value="SCSS">SCSS</option>
                            <option value="HTML">HTML</option>
                        </select>
                        <select value={langageTwo} onChange={(e) => {
                            setLangageTwo(e.target.value);
                        }}>
                            <option value="JavaScript">JavaScript</option>
                            <option value="NodeJs">NodeJs</option>
                            <option value="ReactJs">ReactJs</option>
                            <option value="SCSS">SCSS</option>
                            <option value="HTML">HTML</option>
                        </select>
                        <select value={langageThree} onChange={(e) => {
                            setLangageThree(e.target.value);
                        }}>
                            <option value="JavaScript">JavaScript</option>
                            <option value="NodeJs">NodeJs</option>
                            <option value="ReactJs">ReactJs</option>
                            <option value="SCSS">SCSS</option>
                            <option value="HTML">HTML</option>
                        </select>
                    </div>
                    <div className="wrapper-upload">
                        <button>Upload une image</button>
                        <input type="file" onChange={uploadImage} />
                    </div>
                    <button type='submit'>Poster projet</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});


export default connect(mapStateToProps, { logoutUser })(Dashboard);
