import React from "react";

import styles from '../Styles/Foto.module.css'
import foto from '../IMG/AddFotosIcon.png'

export class Foto extends React.Component {
    render() {
        return (
            <div className={styles.AddFotos} >
                <div className={styles.base_circle}>
                    <div className={styles.circle}>
                        <div className={styles.base_fotos}>
                            <div className={styles.user_div}>
                                <div className={styles.personal_image}>
                                    <label>
                                        <input type="file" id="fileImage" onChange={fileChange} accept="image/*" />
                                        <img src={foto} className={styles.btnAdd} />
                                        <figure className={styles.personal_figure}>
                                            
                                            <img className={styles.personal_avatar} id="imgPhoto" />
                                        </figure>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function fileChange() {
    let photo = document.getElementById('imgPhoto');
    let file = document.getElementById('fileImage');

    if (file.files.length <= 0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
}