import React from "react";
import '../css/estilos.css'

function Card(props){
    return(
        <div className="contenedorTexto">
            <img className='contenedorImagen' src={require(`../imagenes/${props.imagen}`)} alt={props.alt}/>
            <h5 className='contenedorTitulo'>{props.titulo}</h5>
            <p className= 'contenedorParrafo'> {props.parrafo}</p>

        </div>

    );
}
export default Card;