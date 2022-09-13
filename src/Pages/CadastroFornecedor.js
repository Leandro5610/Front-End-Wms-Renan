import styles from "../Styles/Fornecedor.module.css"
import logo from "../IMG/Logo WMS.png"
import { Input } from "../Components/Input"
import { Button } from "../Components/Button"
import api from "../Services/api"

export default function CadastroFornecedor() {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo}></img>
                    <h1 className={styles.titulo}>Cadastro de Fornecedor</h1>
                </header>
                <form className={styles.form} onSubmit={CadastrarFornecedor}>

                    <div className={styles.column}>

                        <div className={styles.divInput}>
                            <label className={styles.label}>Nome</label>
                            <Input id="nome" type="text" placeholder="Digite o Nome do Fornecedor" name="nome" ></Input>
                        </div>

                        <div className={styles.divInput}>
                            <label className={styles.label}>CNPJ</label>
                            <Input id="cnpj" type="text" placeholder="Digite o CNPJ" name="cpnj" ></Input>
                        </div>

                        <div className={styles.divInput}>
                            <label className={styles.label}>CEP</label>
                            <Input id="cep" type="text" placeholder="Digite o CEP" name="cep" ></Input>
                        </div>

                        <div className={styles.divInput}>
                            <label className={styles.label}>Logradouro</label>
                            <Input id="logradouro" type="text" placeholder="Digite o Logradouro" name="nome" ></Input>
                        </div>

                    </div>

                    <div className={styles.column}>

                        <div className={styles.divInput}>
                            <label className={styles.label}>Localidade</label>
                            <Input id="localidade" type="text" placeholder="Digite o localidade" name="localidade" ></Input>
                        </div>

                        <div className={styles.divInput}>
                            <label className={styles.label}>UF</label>
                            <Input id="uf" type="text" placeholder="Digite o UF" name="uf" ></Input>
                        </div>

                        <div className={styles.divInput}>
                            <label className={styles.label}>Homologado</label>
                            
                            <div className={styles.homologado}>
                            <div>
                            <label className={styles.label}>Sim</label>
                            <input id="sim" className={styles.radio} type="radio" value="true" name="homologado" ></input>
                            </div>

                            <div>
                            <label className={styles.label}>Não</label>
                            <input id="nao" className={styles.radio} type="radio" value="false" name="homologado"></input>
                            </div>
                            </div>

                        </div>

                    </div>

                    <Button>Cadastrar Fornecedor</Button>

                </form>
            </div>
        </div>
    )
}

function CadastrarFornecedor(event){
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const cnpj = document.getElementById("cnpj").value
    const cep = document.getElementById("cep").value
    const logradouro = document.getElementById("logradouro").value
    const localidade = document.getElementById("localidade").value
    const uf = document.getElementById("uf").value
    const homologado = document.querySelector('input[name="homologado"]:checked').value

    var body = {
        "nome":nome ,
        "cnpj":cnpj,
        "cep":cep,
        "logradouro" : logradouro,
        "localidade": localidade,
        "uf": uf,
        "homologado": homologado 
     };

     console.log(body)

     api.post("api/fornecedor/save", body)
}