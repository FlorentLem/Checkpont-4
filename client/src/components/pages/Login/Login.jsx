import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import { FaRegFolderOpen } from "react-icons/fa";

import "./Login.scss";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    };

    componentDidMount() {
        const { history, auth } = this.props;
        if (auth.isAuthenticated) {
            history.push("/admin/dashboard");
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { history } = this.props;
        if (
            nextProps.auth.isAuthenticated === true) {
            history.push("/admin/dashboard");
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        // eslint-disable-next-line no-shadow
        const { loginUser } = this.props;

        const userData = {
            email: email.toLowerCase(),
            password: password,
        };

        loginUser(userData);
    };

    render() {
        const { email, password } = this.state;
        return (
            <div style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: ' #333333'
            }}>
                <form className="form__globalContainer" noValidate onSubmit={this.onSubmit}>
                    <h1><FaRegFolderOpen /> MyFolio</h1>
                    <h1>Accès Dashboard Admin</h1>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <input id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={this.onChange}
                        />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.onChange}
                        />
                    </div>
                    <button type="submit">Connexion</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
});


export default connect(mapStateToProps, { loginUser })(Login);
