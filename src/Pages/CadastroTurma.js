import React from "react"

export default function CadastroTurma(){
    return(
        <div>
            <div class="cadastro">
                <form>
                <h1>Cadastro de Turmas</h1>
                <p>Lógistica</p>
                <label>Nome da Turma</label>
                <br />
                <input type="text" name="nome" placeholder="Digite o Nome"></input>
                <br />
                <label>Periodo</label>
                <br />
                <input type="text" name="nome" placeholder="Selecione o Periodo"></input>
                <br />
                <label>Data de Começo</label>
                <br />
                <input type="date" name="nome" placeholder="Selecione a Data"></input>
                <br />
                <label>Número de Participantes</label>
                <br/>
                <input type="range" min="1" max="32" id="myRange" onChange={numero} />
                <p><span id="participantes"></span></p>
                <br/>                
                <button>Criar Turma</button>
                </form>
            </div>
        </div>
    )

}

function numero() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("participantes");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }
} 
