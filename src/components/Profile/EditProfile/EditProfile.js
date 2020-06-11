//Services
import React, {useState} from "react";
//Styles
import s from "./EditProfile.module.scss";
import EditProfileForm from "../EditProfileForm/EditProfileForm";
//Components

const EditProfile = props => {
    const [editMode, setEditMode] = useState(false);

    let onEditMode = () => {
        setEditMode(true);
    };
    let offEditMode = () => {
        setEditMode(false);
    };
    let onSubmitEditForm = formData => {
        console.log(formData);
        props.setNewUserInfo(formData);
        setEditMode(false);
    };
    let buttonEdit = <button onClick={onEditMode}>Edit Profile Info</button>;
    let buttonCancel = <button onClick={offEditMode} className={s.cancel}>Cancel</button>;
    let currentButton = editMode ? buttonCancel : buttonEdit;

    if (props.isItMyPage) {
        return (
            <div className={editMode ? s.section : ''}>
                {currentButton}
                {editMode && <EditProfileForm onSubmit={onSubmitEditForm} initialValues={props.initialValues}/>}
            </div>
        );
    }
    return <></>


}

export default EditProfile;