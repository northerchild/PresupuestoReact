import React,{Fragment} from 'react'

function Pregunta(){
    return(
        <Fragment>
        <h2>Coloca tu Presupuesto</h2>
        <form action="">
            <input type="number" 
                   className="u-full-width"
                   placeholder="Agrega tu presupuesto"
                   //onChange={}
                   />
             <input type="submit"
                    className="u-full-width button-primary" value="Definir Presupuesto"/>      
        </form>
        </Fragment>
    );
}

export default Pregunta