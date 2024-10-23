import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeCoches from './HomeCoches'
import MenuCoches from './MenuCoches'
import Crearcoche from './Crearcoche'
import CocheDetalle from './CocheDetalle'

export default class Router extends Component {
  render() {
    function CocheDetalleElement(){
      let {idcoche} = useParams();
      return (<CocheDetalle id={idcoche}/>)
    }
    
    return (
      <div>
        <BrowserRouter>
        <MenuCoches/>
          <Routes>
            <Route path='/' element={<HomeCoches/>} />
            <Route path='/crearcoche' element={<Crearcoche/>} />
            <Route path='/cochedetalle/:idcoche' element={<CocheDetalleElement/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
