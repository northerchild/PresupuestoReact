import React, {useState} from 'react'
import Error from './Error';
function Formulario(props) {

    //state
    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);

    // cuando se agrega el gasto
    const agregarGasto = e =>{
        e.preventDefault();
        //validar
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true)
            return;
         }

        //pasar el gasto al componente principal
        guardarError(false)
    }
    return (
        <form onSubmit={agregarGasto}>
            <h2>Agregar tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}
            <div className='campo'>
                <label>Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder="Ej. Transporte" onChange = {e => guardarNombreGasto(e.target.value)}/>
            </div>

            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input type="number" className="u-full-width" placeholder="Ej. 300"/>
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto" onChange = {e => guardarCantidadGasto(parseInt(e.target.value, 10))}/>
        </form>
    )
}

export default Formulario;