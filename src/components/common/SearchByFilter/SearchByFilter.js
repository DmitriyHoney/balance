//Services
import React from "react";
//Styles
import s from "./SearchByFilter.module.scss"
//Components

const SearchByFilter = props => {
    let handleRadio = (e) => {
        let filterParam = "";
        switch (e.target.name) {
            case "allUsers":
                filterParam = ""
                break;
            case "onlyFriend":
                filterParam = true
                break;
            case "notFriend":
                filterParam = false
                break;
            default:
                break;
        }
        props.setAnotherPageAC(1);
        props.setFriendFilterAC(filterParam)
    };
    return (
        <div className={s.section}>
            <SearchInputFilter
                value={"all Users"}
                name={"allUsers"}
                checked={props.friend === ""}
                onChange={handleRadio}
            />
            <SearchInputFilter
                value={"only Friend"}
                name={"onlyFriend"}
                checked={props.friend === true}
                onChange={handleRadio}
            />
            <SearchInputFilter
                value={"not Friend"}
                name={"notFriend"}
                checked={props.friend === false}
                onChange={handleRadio}
            />
        </div>
    );
}


const SearchInputFilter = props => {
    return(
        <div>
            <label htmlFor={props.name}>{props.value}</label>
            <input
                type="radio"
                name={props.name}
                id={props.name}
                checked={props.checked}
                onChange={props.onChange}
            />
        </div>
    )
}

export default SearchByFilter;