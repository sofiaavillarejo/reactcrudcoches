import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';

export default class CocheDetalle extends Component {
  state = {
    coche: null
  }
  detallesCoche = () =>{
    let request = "api/Coches/FindCoche/" + this.props.id;
    let url = Global.urlApiCoches + request;
    axios.get(url).then(response => {
      console.log(response.data)
      this.setState({
        coche: response.data
      })
    })
  }

  componentDidMount = () =>{
    this.detallesCoche();
  }
  
  render() {
    return (
      <div>
        <h1>Detalle del coche: {this.props.id}</h1>
        <table className='table table-active'>
          <thead>
            <tr className='table-primary'>
              <th>ID</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Conductor</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.coche && 
                <tr className='table-warning'>
                  <td>{this.props.id}</td>
                  <td>{this.state.coche.marca}</td>
                  <td>{this.state.coche.modelo}</td>
                  <td>{this.state.coche.conductor}</td>
                  <td><img style={{width:"130px"}} src={this.state.coche.imagen}/></td>
                </tr>
            }
          </tbody>
        </table>
      </div>
    )
  }
}
