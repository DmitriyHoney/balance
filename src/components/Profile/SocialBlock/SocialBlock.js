import React from 'react';
import s from './SocialBlock.module.scss';

const SocialBlock = props => {
    let getSocialList = socialObj => {
        let result = [];
        let i = 0;
        for (let key in socialObj) {
            if(socialObj[key] && socialObj[key] !== "") {
                let li = (
                    <div key={i++}><a href={socialObj[key]}>{key}</a></div>
                );
                result.push(li);
            }
        }
        return result;
    };

    let socialList = getSocialList(props.contacts);

    return (
        <div className={s.section}>
            {socialList}
        </div>
    );
}

export default SocialBlock;