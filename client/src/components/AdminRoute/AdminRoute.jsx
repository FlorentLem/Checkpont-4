import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AdminRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                (props) =>
                    auth.isAuthenticated === true ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/admin/login" />
                    )
            }
        />
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoute);