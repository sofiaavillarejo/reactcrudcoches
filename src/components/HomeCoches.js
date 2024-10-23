import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { NavLink } from 'react-router-dom';

export default class HomeCoches extends Component {
  state = {
    coches: []
  }

  loadCoches = () =>{
    var request = "api/Coches";
    var url = Global.urlApiCoches + request;
    axios.get(url).then(response => {
      console.log(response.data);
      this.setState({
        coches: response.data
      })
    })
  }

  componentDidMount = () =>{
    this.loadCoches();
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign:"center", color:"blue"}}>Component Coches</h1>
        <table className='table table-hover'>
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
              this.state.coches.map((coche, index)=>{
                return(
                  <tr className='table-warning' key={index}>
                    <td>{coche.idCoche} ➡️ <NavLink to={"/cochedetalle/" + coche.idCoche} >Detalles</NavLink></td>
                    <td>{coche.marca}</td>
                    <td>{coche.modelo}</td>
                    <td>{coche.conductor}</td>
                    <td><img style={{width:"130px"}} src={coche.imagen}/></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
