//Services
import React, {useEffect, useState} from "react";
import defaultUser from "../../../assets/images/default-user.jpg";
//Styles
import s from "./LargeAvatar.module.scss";

const LargeAvatar = props => {
    const [avatarLoad, setAvatarLoad] = useState(false);
    useEffect(() => {
        setAvatarLoad(false);
    }, [props.src])

    let handleInput = (e) => {
        if ( e.target.files.length > 0 &&
            (e.target.files[0].type === "image/jpeg" || e.target.files[0].type === "image/png")
        ) { //Если файл выбран и он png или jpeg тогда отправляем запрос
            setAvatarLoad(true);
            let photoFile = e.target.files[0];
            props.setNewProfilePhoto(photoFile);
        }
    };

    if(avatarLoad) { //Если фото в процессе загрузки
        return (
            <div className={s.avatarWrap}>
                <div>Load...</div>
            </div>
        );
    } else { //Фото загруженно
        return (
            <div className={s.avatarWrap}>
                <img src={props.src || defaultUser} alt="Avatar"/>
                {props.isItMyPage //Если моя страница, разрешить редактирование
                    && <div className={s.overlay}>
                        <div className={s.loadFile}>
                            <label htmlFor="avatarFile">Загрузить новое фото</label>
                            <input type="file" id={"avatarFile"} onChange={handleInput}/>
                        </div>
                    </div>
                }
            </div>
        );
    }


}

export default LargeAvatar;