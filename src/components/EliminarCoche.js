import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

class EliminarCoche extends Component {
    state = {
        status: false
    }
    
    deleteCoche = () =>{
        let id = this.props.id;
        console.log(id);
        if (window.confirm(`¿Estás seguro de que deseas eliminar el departamento con ID: ${id}?`)) {
            let request = "api/Coches/DeleteCoche/" + id;
            let url = Global.urlApiCoches + request;

            axios.delete(url).then(response => {
                console.log("Coche eliminado");
                // Establecer estado para redirigir después de eliminar
                this.setState({ status: true });
            }).catch(error => {
                console.error("Error al eliminar el coche:", error);
            });
        }
        
    }
    render() {
        if (this.state.status) {
            return <Navigate to="/" />;
        }
        return (
            <div>
                <h1>Eliminar vehículo</h1>
                <button onClick={this.deleteCoche} className='btn btn-danger'>Eliminar</button>
            </div>
        );
    }
}

export default EliminarCoche;