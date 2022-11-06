import React from 'react'
import "./imghelper.css"
import {IoArrowBackCircle} from "react-icons/io5"
import fedepat from '../images/Fedepat_bg.png';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';




function imghelper({base64String,categoria}) {

  return (


    <>
    <div className="PaginaImagen">

      {/* THIS IS THE SCREENS HEADER */}
      <div className="PaginaImagen-header">
          <div className="PaginaImagen-header-volver">
              <Link to ={routes.admin.acceptusers} style={{textDecoration: 'none'}} >
                  <IoArrowBackCircle size='35px' color='#02174A'/>
              </Link>
              <label className="PaginaImagen-header-volvertexto">Comprobante de pago</label>
          </div>


          <div className="PaginaImagen-header-FEDEPAT">
              <img src={fedepat} className='PaginaImagen-header-logo' alt='Fedepat-logo'/>
              <label className='PaginaImagen-header-texto-FEDEPAT'>Federacion Costarricense de<br/>Patinaje y Deportes Afines</label>
          </div>
      </div>


      <div style={{backgroundColor:'#FFF', width:'100%', height:'100%'}}>
          {/* THIS IS THE IMAGE */}
          <div className='center_img' >
              <img 
                src={`data:image/png;base64,${base64String}`} 
                alt="imagen" 
                height="400"/>
          </div>
      </div>



      




      </div>
    </>
  )


}

export default imghelper