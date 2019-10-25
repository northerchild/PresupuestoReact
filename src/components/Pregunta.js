import React,{Fragment, useState} from 'react'
import Error from './Error';

function Pregunta(props){

    const {guardarPresupuesto, guardarPreguntaPresupuesto} = props;

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    //validar Presupuesto

    const agregarPresupuesto = e =>{
        e.preventDefault();
        //validar
        if(cantidad < 1 || isNaN(cantidad)){
           guardarError(true)
           return;
        }
        // si pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarPreguntaPresupuesto(false);
    }

    return(
        <Fragment>
        <h2>Coloca tu Presupuesto</h2>
        {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
        <form action=""
            onSubmit={agregarPresupuesto}
        >
            <input type="number" 
                   className="u-full-width"
                   placeholder="Agrega tu presupuesto"
                   onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                   />
             <input type="submit"
                    className="u-full-width button-primary" value="Definir Presupuesto"/>      
        </form>
        </Fragment>
    );
}

export default Pregunta