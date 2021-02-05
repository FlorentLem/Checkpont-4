import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

import { FaRegFolderOpen, FaUserAlt } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import "./DashboardProfile.scss";

const DashboardProfile = ({ auth, logoutUser }) => {
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
                <div className="dashboardProfil__container">
                    <h1>Votre profil</h1>
                    <div className="dashboardProfil__info">
                        <p>Prénom: {auth.user.firstname}</p>
                        <p>Nom: {auth.user.lastname}</p>
                        <p>Email: <br />{auth.user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});


export default connect(mapStateToProps, { logoutUser })(DashboardProfile);