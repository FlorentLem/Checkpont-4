import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { AiFillPicture, AiFillDashboard } from "react-icons/ai";
import './Navbar.scss';

const Navbar = ({ auth }) => {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [menu])

    return (
        <>
            <div className="navBar__globalContainer">
                <nav className="navBar__main">
                    <ul className="navBar__menu">
                        <Link to="/">
                            <li className="navBar__menuContent">
                                <FaHome /> Home
                        </li>
                        </Link>
                        <Link to="/contact">
                            <li className="navBar__menuContent">
                                <MdEmail /> Contact
                        </li>
                        </Link>
                        <Link to="/gallery">
                            <li className="navBar__menuContent">
                                <AiFillPicture /> Gallery
                        </li>
                        </Link>
                        {
                            auth.isAuthenticated ? (
                                <Link to="/admin/dashboard">
                                    <li className="navBar__menuContent">
                                        <AiFillDashboard /> Dashboard
                                </li>
                                </Link>
                            ) : ""
                        }
                    </ul>
                    <div className="navBar__menuBurger" onClick={() => {
                        setMenu(!menu);
                    }}>
                        {
                            menu ? (
                                <ImCross />
                            ) :
                                (
                                    <GoThreeBars />
                                )
                        }
                    </div>
                </nav>
            </div>
            <ul className="navBar__menuMobile" style={{
                transform: menu ? "translateY(0)" : "translateY(-200%)",
                transition: "0.8s all ease"
            }}>
                <Link to="/" onClick={() => {
                    setMenu(!menu);
                }}>
                    <li className="navBar__menuContentMobile">
                        <FaHome /> Home
                        </li>
                </Link>
                <Link to="/contact" onClick={() => {
                    setMenu(!menu);
                }}>
                    <li className="navBar__menuContentMobile">
                        <MdEmail /> Contact
                        </li>
                </Link>
                <Link to="/gallery" onClick={() => {
                    setMenu(!menu);
                }}>
                    <li className="navBar__menuContentMobile">
                        <AiFillPicture /> Gallery
                        </li>
                </Link>
                {
                    auth.isAuthenticated ? (
                        <Link to="/admin/dashboard" onClick={() => {
                            setMenu(!menu);
                        }}>
                            <li className="navBar__menuContentMobile">
                                <AiFillDashboard /> Dashboard
                                </li>
                        </Link>
                    ) : ""
                }
            </ul>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
