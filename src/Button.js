// Esse é um componente stateless componente
//Feito em modo de uma função
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <button onClick={props.onClick}>
        {props.children}
    </button>
);

    Button.defaultProps = {
        children: 'Salvar',
    };
    
    Button.protoTypes = {
        onClick: PropTypes.func.isRequired,
        children: PropTypes.string,
    };
    
    export default Button;