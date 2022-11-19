import { useEffect, useState } from "react"
import CompetitionDetails from '../../components/CompetitionDetails'
import './CompetitionPage.css';
import './navbar.css'
import {IoArrowBackCircle} from "react-icons/io5"
import fedepat from '../../images/Fedepat_bg.png';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';


const  CompetitionPage = () => {
    const [competitions ,setCompetition] = useState(null)
    const [provincia ,setProvincia] = useState('todo')
    const [tipo, setTipo] = useState('todo')

    const fetchWorkout = async (provincia,tipo) =>{
        const response = await fetch('/api/competition/showAllCompetition',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({provincia,tipo})
        })
        const json = await response.json()
        
        if(response.ok){
            setCompetition(json)
        }
    }
    

    useEffect(() => {
        fetchWorkout(provincia,tipo)
    },[provincia,tipo])



    return(
        <>

            <div className="PaginaCompeticion">

                {/* THIS IS THE SCREENS HEADER */}
                <div className="PaginaCompeticion-header">
                    <div className="PaginaCompeticion-header-volver">
                        <Link to ={routes.home} style={{textDecoration: 'none'}} >
                            <IoArrowBackCircle size='35px' color='#02174A'/>
                        </Link>
                        <label className="PaginaCompeticion-header-volvertexto">Competencias  registradas</label>
                    </div>


                    <div className="PaginaCompeticion-header-FEDEPAT">
                        <img src={fedepat} className='PaginaCompeticion-header-logo' alt='Fedepat-logo'/>
                        <label className='PaginaCompeticion-header-texto-FEDEPAT'>Federacion Costarricense de<br/>Patinaje y Deportes Afines</label>
                    </div>
                </div>



                {/* THIS IS THE SCREENS BODY */}

                <div className="PaginaCompeticion-body">
                <div className="PaginaCompeticion-filtros">
                        <label className="PaginaCompeticion-filtros-texto">Filtrar por provincia: </label>
                        
                        <select name="catec" id="catec" className="PaginaCompeticion-filtros-dropdown" onChange={(e) => setProvincia(e.target.value)} value={provincia}>
                            <option value="todo">todo</option>
                            <option value="San Jose">San Jose</option>
                            <option value="Cartago">Cartago</option>
                            <option value="Heredia">Heredia</option>
                            <option value="Limón">Limón</option>
                            <option value="Alajuela">Alajuela</option>
                            <option value="Puntarenas">Puntarenas</option>
                            <option value="Guanacaste">Guanacaste</option>
                            
                        </select>
                        <div style={{width:'10px'}}></div>
                        <label className="PaginaCompeticion-filtros-texto">Filtrar por categoría: </label>
                        
                        <select name="catec" id="catec" className="PaginaCompeticion-filtros-dropdown" onChange={(e) => setTipo(e.target.value)} value={tipo}>
                            <option value="todo">todo</option>
                            <option value="Patín recreativo en línea o tradicional (4 ruedas)">Patín recreativo en línea o tradicional (4 ruedas)</option>
                            <option value="Semiprofesional bota alta en línea">Semiprofesional bota alta en línea</option>
                        </select>
                    </div>

                    <div>
                        {competitions && competitions.map((competition) =>(
                            <CompetitionDetails key={competition._id} competition={competition} />
                        ))}
                    </div> 
                </div>

            </div>





            
        </>
    )
}

export default CompetitionPage