import axios from "axios";
import React, { useState } from "react";

import svg from "./assets/svg2.svg";

import "./Contact.scss";

const Contact = () => {
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");

    const postEmail = () => {
        const newEmail = {
            text: message,
            name: name,
            email: email,
            subject: subject
        }
        axios.post('http://localhost:8000/api/email', newEmail)
            .then((res) => {
                alert("email bien envoyé");
            }).catch((err) => {
                alert("Erreur pendant l'envoie d'un email");
            });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !message) {
            alert('Veuillez renseinger un email et un message')
        } else {
            postEmail()
        }
    }

    return (
        <div className="contact__globalContainer">
            <div className="svg" style={{
                backgroundImage: `url(${svg})`
            }} />
            <form className="contact__form" noValidate onSubmit={onSubmit}>
                <h1>Contactez moi !</h1>
                <div className="contact__inputContainer">
                    <div className="contact__left">
                        <input value={subject} placeholder="Objet" type="text" onChange={(e) => {
                            setSubject(e.target.value);
                        }} />
                        <input value={name} placeholder="Nom" type="text" onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        <input value={email} type="email" placeholder="Email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    <div className="contact__right">
                        <textarea value={message} placeholder="Votre Message" onChange={(e) => {
                            setMessage(e.target.value);
                        }} />
                    </div>
                </div>
                <button type="submit">Envoyez le message</button>
            </form>
        </div>
    );
}

export default Contact;