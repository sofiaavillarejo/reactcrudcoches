import React, { Component } from 'react'
import Global from './Global';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default class Crearcoche extends Component {
  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  archivoImagen = React.createRef();

  state = {
    status: false
  }
  
  crearCoche = (e) =>{
    e.preventDefault();
    console.log("click");
    //recuperar primero los valores de los inputs
    let id = this.cajaId.current.value;
    let marca = this.cajaMarca.current.value;
    let modelo = this.cajaModelo.current.value;
    let conductor = this.cajaConductor.current.value;

    let coche = {
      idCoche: id,
      marca: marca,
      modelo: modelo,
      conductor: conductor,
    }

    let request = "api/Coches/InsertCoche";
    let url = Global.urlApiCoches + request;
    axios.post(url, coche).then(response =>{
      console.log("Creado")
      this.setState({
        status: true
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.status == true && <Navigate to="/"/>
        }
        <form className='form-control'>
          <h1>Crear coche</h1>
          <label>Introduce id:</label>
          <input ref={this.cajaId} className='form-control' type='text' /><br/>
          <label>Introduce marca:</label>
          <input ref={this.cajaMarca} className='form-control' type='text' /><br/>
          <label>Introduce modelo:</label>
          <input ref={this.cajaModelo} className='form-control' type='text' /><br/>
          <label>Introduce conductor:</label>
          <input ref={this.cajaConductor} className='form-control' type='text' /><br/>
          <label>Introduce imagen: (no usar)</label>
          <input ref={this.archivoImagen} className='form-control' type='file' /><br/>
          <hr/>
          <button onClick={this.crearCoche} className='btn btn-primary'>Crear</button>
        </form>
      </div>
    )
  }
}
