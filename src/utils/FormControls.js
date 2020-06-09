import React from "react";
import s from "./FormsControls.module.scss";

export const createFormElement = Component => ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return(
        <div className={s.formControl + ` ` + (hasError ? s.error : ``) }>
            <div>
                <Component {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const CustomInput = createFormElement("input");
export const CustomTextarea = createFormElement("textarea");