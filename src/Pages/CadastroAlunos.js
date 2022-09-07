import React from "react"

export default function CadastroAlunos() {
    return (
        <div>
            
            <div class="cadastro">
            <form>
                <h1>Cadastro de Aluno(a)</h1>
                <label>Nome</label>
                <br />
                <input type="text" name="nome" placeholder="Digite seu Nome"></input>
                <br />
                <label>Numero de Matricula</label>
                <br />
                <input type="number" name="numMatricula" placeholder="Digite o N Matricula"></input>
                <br />
                <label>Senha</label>
                <br />
                <input type="password" name="Senha" placeholder="Digite sua Senha"></input>
                <br />
                <button>Criar Conta</button>
                </form>
            </div>
        </div>
    )

}