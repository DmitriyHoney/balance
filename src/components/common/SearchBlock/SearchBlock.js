//Services
import React from "react";
//Styles
import s from "./SearchBlock.module.scss";
//Components

const SearchBlock = props => {
    return (
        <div className={s.section}>
            <input type="text" placeholder={"Search..."} value={props.value} onChange={props.onChange}/>
            <button onClick={props.onClick}>Search</button>
            <button onClick={props.onClickReset}>Reset</button>
        </div>
    );
}

export default SearchBlock;