import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import CadastroAlunos from './Pages/CadastroAlunos';
import CadastroProfessores from './Pages/CadastroProfessores';
import CadastroTurma from './Pages/CadastroTurma';

const history = createBrowserHistory()


export default function Routes() {
    return(
        <Router history={history}>
            <Switch>
                <Route path='/CadastroAlunos' component={CadastroAlunos} ></Route>
                <Route path='/CadastroProfessores' component={CadastroProfessores} ></Route>
                <Route path='/CadastroTurma' component={CadastroTurma} ></Route>
            </Switch>
        </Router>
    );
}