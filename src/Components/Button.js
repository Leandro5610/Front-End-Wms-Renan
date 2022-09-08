import React from "react";
import styles from "../Styles/Button.module.css"

export class Button extends React.Component {
    render () {
        return(
            <button className={styles.botao} type="submit">
                {this.props.children}
            </button>
        );
    }
} 