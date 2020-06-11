import React from "react";
import LoginFormWithReduxForm from "./LoginForm/LoginForm";


const Login = props => {
    let handleSubmit = formData => {
        props.sendLoginFormData(formData);
    };

    return(
        <LoginFormWithReduxForm
            captchaUrl={props.captchaUrl}
            onSubmit={handleSubmit}
        />
    )
}



export default Login;