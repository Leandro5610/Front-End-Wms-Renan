import { Axios } from 'axios';
import { useEffect } from 'react';
import './App.css';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import Routes from './routes';
import api from './Services/api';



function Foto(event) {
  event.preventDefault()

  
  var imagem = document.getElementById("imagem").value
  
  /*var convert = base64String.replace(":", "")
 var  convert2= convert.replace(";","")
  var convert3=convert2.replace("/","")
  var convert4= convert3.replace(",","")*/

  
  var body = {"imagem":imagem};

  console.log(body)

  api.post(
      "api/aluno/foto",body
  );

}


function App() {

  return (
    <div className="App">
      <Routes />
      <form onSubmit={Foto}>
    <Input type="file" id="imagem" onchange=""></Input>
    <Button></Button>
    </form>
    </div>
  );
}

export default App;
