//Services
import React from "react";
//Styles
//import s from "./EditProfileForm.module.scss";
import {Field, reduxForm} from "redux-form";
import {CustomInput, CustomTextarea} from "../../../utils/FormControls";
import {required} from "../../../utils/validators";
//Components

const EditProfileForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="fullName" component={CustomInput} type="text" validate={[required]} placeholder={"Full name"}/>
            <Field name="aboutMe" component={CustomTextarea} validate={[required]} placeholder={"About me"}/>
            <Field name="lookingForAJob" component={CustomInput} type="checkbox" placeholder={"lookingForAJob"}/>
            <Field name="lookingForAJobDescription" component={CustomTextarea} validate={[required]} placeholder={"lookingForAJobDescription"}/>
            <div>
                <h3>
                    Contacts
                </h3>
                <Field name="contacts.github" component={CustomInput} type="text" placeholder={"github"}/>
                <Field name="contacts.vk" component={CustomInput} type="text" placeholder={"vk"}/>
                <Field name="contacts.facebook" component={CustomInput} type="text" placeholder={"facebook"}/>
                <Field name="contacts.instagram" component={CustomInput} type="text" placeholder={"instagram"}/>
                <Field name="contacts.twitter" component={CustomInput} type="text" placeholder={"twitter"}/>
                <Field name="contacts.website" component={CustomInput} type="text" placeholder={"website"}/>
                <Field name="contacts.youtube" component={CustomInput} type="text" placeholder={"youtube"}/>
                <Field name="contacts.mainLink" component={CustomInput} type="text" placeholder={"mainLink"}/>
            </div>
            <button>Send</button>
        </form>
    );
}

let EditProfileFormWithReduxForm = reduxForm(
    {form: "edit-profile"}
)(EditProfileForm)

export default EditProfileFormWithReduxForm;