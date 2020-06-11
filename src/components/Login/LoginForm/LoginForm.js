import React from "react";
import {Field, reduxForm} from "redux-form";
import {CustomInput} from "../../../utils/FormControls";
import {required} from "../../../utils/validators";
import s from "./LoginForm.module.scss";

const LoginForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="email" component={CustomInput} type="text" validate={[required]} placeholder={"email"}/>
            <Field name="password" component={CustomInput} type="password" validate={[required]} placeholder={"password"}/>
            <div className={s.remember}>
                <label htmlFor="rememberMe">Remember me</label>
                <Field name="rememberMe" component={CustomInput} type="checkbox" placeholder={"remember me"} id={"rememberMe"}/>
            </div>

            <button>Login</button>
            {props.error
                &&<div className={s.errorBlock}>
                        {props.error}
                    </div>
            }
            {props.captchaUrl
                &&  <>
                        <img src={props.captchaUrl} alt="Capthca"/>
                        <Field name="captcha" component={CustomInput} type="text" validate={[required]} placeholder={"captcha"}/>
                    </>
            }

        </form>
    )
}

let LoginFormWithReduxForm = reduxForm(
    {form: "login"}
)(LoginForm)

export default LoginFormWithReduxForm;