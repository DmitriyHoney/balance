//Services
import React from "react";
//Styles
//import s from "./UsersList.module.scss";
import SmallAvatar from "../../common/SmallAvatar/SmallAvatar";
//Components

const UsersList = props => {

    let toggleFollowUser = (userId, followed) => {
        props.toggleFollowUser(userId, followed);
    }


    let userList = props.users.map(oneUser => {
        let {name, id, photos, status, followed} = oneUser; //uniqueUrlName
        return (
            <div key={id}>
                <div>
                    <SmallAvatar src={photos.small} id={id}/>
                    <h3>{name}</h3>
                </div>
                <p>Status: {status}</p>
                {followed
                    ? <button
                        disabled={props.usersInProcessOfSubscribing.some(e => e === id)}
                        onClick={() => toggleFollowUser(id, followed)}>Unfollow</button>
                    : <button
                        disabled={props.usersInProcessOfSubscribing.some(e => e === id)}
                        onClick={() => toggleFollowUser(id, followed)}>Follow</button>
                }
            </div>
        )
    });

    return (
        <div>
            {userList}
        </div>
    );
}


/*
    name: "vitaliidrapaliuk",
    id: 8697,
    uniqueUrlName: null,
    photos: {
        small: null,
        large: null
    },
    status: null,
    followed: false
*/
export default UsersList;