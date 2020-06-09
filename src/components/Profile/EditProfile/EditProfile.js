//Services
import React, {useState} from "react";
//Styles
//import s from "./EditProfile.module.scss";
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
    let buttonEdit = <button onClick={onEditMode}>Edit</button>;
    let buttonCancel = <button onClick={offEditMode}>Cancel</button>;
    let currentButton = editMode ? buttonCancel : buttonEdit;

    if (props.isItMyPage) {
        return (
            <div>
                {currentButton}
                {editMode && <EditProfileForm onSubmit={onSubmitEditForm} initialValues={props.initialValues}/>}
            </div>
        );
    }
    return <></>


}

export default EditProfile;