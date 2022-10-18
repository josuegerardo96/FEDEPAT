import React from 'react'
import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import ImgHelper from '../../components/ImgHelper'
function FotosDocumentos() {
  const { iduser } = useParams();
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchWorkout = async (_id) =>{
        const response = await fetch('/api/img/imageget',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id})
        })
        .catch((err)=>console.log(err,"tiene un error"))
        const json = await response.json()
        
        if(response.ok){
          setData(json)
        }
    }
    fetchWorkout(iduser)
},[iduser])

console.log(data)

  return (
    <div >
  
      <h1>Datos</h1>
      {data.map((singleData) => {
        const base64String = btoa(new Uint8Array(singleData.img.data.data).reduce(function (data, byte) {
          return data + String.fromCharCode(byte);
      }, ''));
        
        return <ImgHelper key={singleData._id} base64String={base64String} categoria={singleData.categoria} />
      })}
    </div>

  )
}

export default FotosDocumentos