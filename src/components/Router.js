import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeCoches from './HomeCoches'
import MenuCoches from './MenuCoches'
import Crearcoche from './Crearcoche'
import CocheDetalle from './CocheDetalle'
import ModificarCoche from './ModificarCoche'
import EliminarCoche from './EliminarCoche'

export default class Router extends Component {
  render() {
    function CocheDetalleElement(){
      let {idcoche} = useParams();
      return (<CocheDetalle id={idcoche}/>)
    }

    function CocheUpdateElement(){
      let {idcoche, marca, modelo, conductor} = useParams();
      return (<ModificarCoche id={idcoche} marca={marca} modelo={modelo} conductor={conductor}/>)
    }

    function CocheDeleteElement(){
      let {idcoche} = useParams();
      return (<EliminarCoche id={idcoche}/>)
    }

    return (
      <div>
        <BrowserRouter>
        <MenuCoches/>
          <Routes>
            <Route path='/' element={<HomeCoches/>} />
            <Route path='/crearcoche' element={<Crearcoche/>} />
            <Route path='/cochedetalle/:idcoche' element={<CocheDetalleElement/>} />
            <Route path='/cocheupdate/:idcoche/:marca/:modelo/:conductor' element={<CocheUpdateElement/>} />
            <Route path='/cochedelete/:idcoche' element={<CocheDeleteElement/>} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
