import React from "react"

export default function CadastroProfessores(){
    return(
        <div>
            <div class="cadastro">
                <form>
                <h1>Cadastro de Professor(a)</h1>
                <label>Nome</label>
                <br />
                <input type="text" name="nome" placeholder="Digite seu Nome"></input>
                <br />
                <label>Nif</label>
                <br />
                <input type="number" name="nif" placeholder="Digite o NIF"></input>
                <br />
                <label>Senha</label>
                <br />
                <input type="password" name="senha" placeholder="Digite sua Senha"></input>
                <br />
                <button>Criar Conta</button>
                </form>
            </div>
        </div>
    )

}