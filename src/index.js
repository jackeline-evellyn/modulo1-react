import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';

class Button extends Component {
    render(){
        return <a href="">Salvar</a>
    }
}

class App extends Component {
    render() {
        return (
   // Após o return precisa de um tag html por volta
        <Fragment>
            {/* Fragment funciona da mesma forma sem ultilizar pré formatação */}
            <h1>Hello Rocketseat</h1>
            {/* Chama o component Button dentro do Component App */}
            <Button />
        </Fragment>
        );
    }
}

render(<App />, document.getElementById("app"));

