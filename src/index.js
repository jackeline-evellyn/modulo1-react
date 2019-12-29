import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

class Button extends Component {
    
static defaultProps = {
    children: 'Salvar',
};

static protoTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string,
};

    render(){
        return <button onClick={this.props.onClick}>
                    {this.props.children}
                 </button>
    }
}


class App extends Component {

state = {
    counter: 0,
};

handleClick = () => {
    // sobrepondo o valor do conter 
    // React nao aceita alterar o estado
    this.setState({counter: this.state.counter + 1 });
};

    render() {
        return (
   // Após o return precisa de um tag html por volta
        <Fragment>
            {/* Fragment funciona da mesma forma sem ultilizar pré formatação */}
            <h1>Hello Rocketseat</h1>
            <h2>{this.state.couter}</h2>
            {/* Chama o component Button dentro do Component App */}
            <Button onClick={this.handleClick}>Somar</Button>
            
        </Fragment>
        );
    }
}
// renderiza o h1 dentro da div="app"
render(<App />, document.getElementById("app"));

