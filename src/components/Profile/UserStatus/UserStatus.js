//Services
import React, {useState} from "react";
//Styles
//import s from "./UserStatus.module.scss";

const UserStatus = props => {
    let oldStatus = props.userStatus; //Изначальный статус

    const [userStatus, setUserStatus] = useState(props.userStatus);
    const [editMode, setEditMode] = useState(false);

    let offEditMode = e => {
        let newStatusText = e.target.value;
        if (newStatusText !== oldStatus) props.changeUserStatus(newStatusText);//Если ничего не изменено, не отправляем запрос
        setEditMode(false);
    };
    let onEditMode = () => {
        setEditMode(true);
    };
    let handleInput = e => {
        setUserStatus(e.target.value);
    };

    return (
        <div>
            {editMode
                ? <input
                        type="text"
                        onBlur={offEditMode}
                        autoFocus={true}
                        value={userStatus}
                        onChange={handleInput}
                    />
                : <span onDoubleClick={props.isItMyPage ? onEditMode : () => {}}>{userStatus || "Нет статуса"}</span>
            }
        </div>
    );
}

export default UserStatus;