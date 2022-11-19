import { useEffect, useState } from "react"
import CompDetailsregis from '../../components/CompDetailsregis'
import './UserPage.css';
import { IoArrowBackCircle } from "react-icons/io5"
import fedepat from '../../images/Fedepat_bg.png';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';


const CompetitionPage = () => {
    const [competitions, setCompetition] = useState(null)
    const [provincia, setProvincia] = useState('todo')
    const [tipo, setTipo] = useState('todo')

    const fetchWorkout = async (provincia, tipo) => {
        const response = await fetch('/api/competition/showAllCompetition', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ provincia, tipo })
        })
        const json = await response.json()

        if (response.ok) {
            setCompetition(json)
        }
    }


    useEffect(() => {
        fetchWorkout(provincia, tipo)
    }, [provincia, tipo])


    return (
        <>

            <div className="Paginausuarios">

                {/* THIS IS THE SCREENS HEADER */}
                <div className="Paginausuarios-header">
                    <div className="Paginausuarios-header-volver">
                        <Link to={routes.home} style={{ textDecoration: 'none' }} >
                            <IoArrowBackCircle size='35px' color='#02174A' />
                        </Link>
                        <label className="Paginausuarios-header-volvertexto">Competencias  en el sistema</label>
                    </div>


                    <div className="Paginausuarios-header-FEDEPAT">
                        <img src={fedepat} className='Paginausuarios-header-logo' alt='Fedepat-logo' />
                        <label className='Paginausuarios-header-texto-FEDEPAT'>Federacion Costarricense de<br />Patinaje y Deportes Afines</label>
                    </div>
                </div>



                {/* THIS IS THE SCREENS BODY */}

                <div className="Paginausuarios-body">

                    <div className="Competencias-filtros">
                        
                        <label className="Competencias-filtros-texto">Filtrar por provincia:</label>
                        <div style={{width:'20px'}}></div>
                        <select name="catec" className="Competencias-filtros-dropdown" id="catec" onChange={(e) => setProvincia(e.target.value)} value={provincia}>
                            <option value="todo">todo</option>
                            <option value="San Jose">San Jose</option>
                            <option value="Cartago">Cartago</option>
                            <option value="Heredia">Heredia</option>
                            <option value="Limón">Limón</option>
                            <option value="Alajuela">Alajuela</option>
                            <option value="Puntarenas">Puntarenas</option>
                            <option value="Guanacaste">Guanacaste</option>


                        </select>
                        <div style={{width:'50px'}}></div>

                        <label className="Competencias-filtros-texto">Filtrar por tipo: </label>
                        <div style={{width:'20px'}}></div>
                        <select name="catec" id="catec" className="Competencias-filtros-dropdown" onChange={(e) => setTipo(e.target.value)} value={tipo}>
                            <option value="todo">todo</option>
                            <option value="Patín recreativo en línea o tradicional (4 ruedas)">Patín recreativo en línea o tradicional (4 ruedas)</option>
                            <option value="Semiprofesional bota alta en línea">Semiprofesional bota alta en línea</option>
                        </select>
                    </div>

                    <div>
                        {competitions && competitions.map((competition) => (
                            <CompDetailsregis key={competition._id} competition={competition} />
                        ))}
                    </div>
                </div>

            </div>






        </>
    )
}

export default CompetitionPage