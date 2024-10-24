import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

class ModificarCoche extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status: false,
        //coche: null // --> si uso esto tendría que volver a hacer axios
    }
    
    modificarCoche = (e) => {
        console.log(this.props.marca);
        e.preventDefault();
        let request = "api/Coches/UpdateCoche";
        let url = Global.urlApiCoches + request;
        let id = parseInt(this.cajaId.current.value);
        let marca = this.cajaMarca.current.value;
        let modelo = this.cajaModelo.current.value;
        let conductor = this.cajaConductor.current.value;
        let imagen = "";

        let coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        axios.put(url, coche).then(response => {
            console.log(response);
            this.setState({
                status: true
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Modificar Coche {this.props.id}</h1>
                {
                    this.state.status == true && <Navigate to="/"/>
                }
                <form>
                    <label>Id:</label>
                    <input className='form-control' ref={this.cajaId} value={this.props.id} disabled/>
                    <label>Marca:</label>
                    <input className='form-control' ref={this.cajaMarca} defaultValue={this.props.marca}/>
                    <label>Modelo:</label>
                    <input className='form-control' ref={this.cajaModelo} defaultValue={this.props.modelo}/>
                    <label>Conductor:</label>
                    <input className='form-control' ref={this.cajaConductor} defaultValue={this.props.conductor}/>
                    <hr/>
                    <button className='btn btn-warning' onClick={this.modificarCoche}>Modificar</button>
                </form>
            </div>
        );
    }
}

export default ModificarCoche;