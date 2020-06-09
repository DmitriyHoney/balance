//Services
import React from "react";
//Styles

//Components

const SearchBlock = props => {
    return (
        <div>
            <input type="text" placeholder={"Search..."} value={props.value} onChange={props.onChange}/>
            <button onClick={props.onClick}>Search</button>
            <button onClick={props.onClickReset}>Reset</button>
        </div>
    );
}

export default SearchBlock;