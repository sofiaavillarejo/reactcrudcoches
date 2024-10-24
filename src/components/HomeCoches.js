import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { NavLink } from 'react-router-dom';

export default class HomeCoches extends Component {
  cajaId = React.createRef();
  
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

  filtrarCoches = (e) =>{
    e.preventDefault();
    let id = parseInt(this.cajaId.current.value);
    let request = "api/Coches/FindCoche/" + id;
    let url = Global.urlApiCoches + request;
    axios.get(url).then(response => {
      this.setState({
        coches: [response.data] //[] para asegurarnos de que es un array y pueda mapearlo
      })
    })
  }

  //todo: metodo si el eliminar le hago aqui mismo
  // deleteCoche = (idcoche) =>{
  //   let request = "api/Coches/DeleteCoche" + idcoche;
  //   let url = Global.urlApiCoches + request;
  //   axios.get(url).then(response => {
  //       console.log("Coche borrado");
  //       this.loadCoches();
  //   })
  // }

  render() {
    return (
      <div>
        <h1 style={{textAlign:"center", color:"blue"}}>Component Coches</h1>
        <form>
          <label>Buscar coche por id:</label>
          <input style={{width:"10%"}} className='form-control' type='text' ref={this.cajaId}/>
          <button style={{marginTop:"20px"}} className='btn btn-warning' onClick={this.filtrarCoches}>Buscar</button>
        </form>
        <hr/>
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
                    <td>{coche.idCoche} 
                      ➡️ <NavLink to={"/cochedetalle/" + coche.idCoche} >Detalles</NavLink> 
                      ➡️ <NavLink to={"/cocheupdate/" + coche.idCoche + "/" + coche.marca + "/" + coche.modelo + "/" + coche.conductor}>Modificar</NavLink>
                      ➡️ <NavLink to={"/cochedelete/" + coche.idCoche}><button className='btn btn-danger'>Eliminar</button></NavLink> </td>
                    <td>{coche.marca}</td>
                    <td>{coche.modelo}</td>
                    <td>{coche.conductor}</td>
                    <td><img style={{width:"130px"}} alt='foto coche' src={coche.imagen}/></td>
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
