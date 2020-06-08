import React from 'react';
import preloaderImg from "../../../assets/images/preloader.svg";
import s from './Preloader.module.scss';

const Preloader = props => {
    return (
        <div>
            <img src={preloaderImg} alt="Preloader"/>
        </div>
    );
}

export default Preloader;