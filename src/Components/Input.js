import React from "react";
import styles from "../Styles/Input.module.css"

export class Input extends React.Component {
    render () {
        const {placeholder, type, name} = this.props
        return(
            <input type={type} placeholder={placeholder} min="0" autoComplete="off" required className={styles.input} name={name}></input>
        );
    }
} 