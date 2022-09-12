import React from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Input"
import styles from "../Styles/CadastroAlunos/Prof.module.css"
import logo from "../IMG/Logo WMS.png"
import { Foto } from "../Components/Foto"

import api from "../Services/api"

export default function CadastroAlunos() {
    return (
        <div className={styles.container}>
            <div className={styles.imagensContainer}>

                <div className={styles.logoDiv}>
                    <img src={logo} className={styles.logo}></img>
                </div>

                <div className={styles.fotoDiv}>
                    <Foto></Foto>
                </div>

                <div></div>

            </div>

            <div className={styles.formContainer}>
                <h1 className={styles.h1}>Cadastro de Aluno(a)</h1>
                <form onSubmit={CadastrarAluno}>
                    <label className={styles.label}>Nome</label>
                    <br />
                    <Input id="nome" type="text" placeholder="Digite o seu Nome" name="nome" />
                    <br />
                    <label className={styles.label}>Número de Matricula</label>
                    <br />
                    <Input id="numMatricula" type="number" name="numMatricula" placeholder="Digite o N° Matrícula" />
                    <br />
                    <label className={styles.label}>Senha</label>
                    <br />
                    <Input id="senha" type="password" name="senha" placeholder="Digite sua Senha" />
                    <br />
                    <Button>Cadastrar</Button>
                </form>
            </div>
        </div>
    )

}

function CadastrarAluno(event) {
    event.preventDefault()

    var nome = document.getElementById("nome").value
    var numMatricula = document.getElementById("numMatricula").value
    var senha = document.getElementById("senha").value

    var body = {"nome":nome , "codMatricula":numMatricula , "senha":senha };

    console.log(body)

    api.post(
        "api/aluno/save",body
    );

}