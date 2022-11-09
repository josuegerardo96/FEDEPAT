import { Link } from 'react-router-dom';
import { useDeleteCompetiton } from "../hooks/useDeleteCompetition"
import {RiDeleteBinFill, RiEdit2Fill} from "react-icons/ri";
import Moment from 'moment';
import './UserAcceptance.css';





const CompetitionDetails = ({competition}) =>{
    const { deletecompetition , error, isLoading } = useDeleteCompetiton()
    const current = new Date(competition.fecha)
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${("0" + current.getDate()).slice(-2)}`;

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await deletecompetition(competition._id)
        
    }

  

    return (



        <div className='Solicitudes-caja'>
            

            
                   
                        <label className='Solicitudes-caja-textonormal'><strong>Competencia.</strong><br/>{competition.nombre}</label>
                        <label className='Solicitudes-caja-textonormal'>{competition.tipo}</label>
                        <label className='Solicitudes-caja-textonormal'><strong>Provincia</strong><br/>{competition.provincia}</label>
                        <label className='Solicitudes-caja-textonormal'><strong>Ubicación</strong><br/>{competition.ubicación}</label>
                        <label className='Solicitudes-caja-textonormal'><strong>Fecha Inicio</strong><br/>{date}</label>
                

                        <div className='Solicitudes-caja-rol-icon'>
                            


                            {/* Delete THE COMPETITON */}
                            <form onSubmit={handleSubmit}>    
                                <button className='botonFORM' disabled = { isLoading} onClick={() => window.location.reload(false)} >
                                    <RiDeleteBinFill color='#CD1F28' size='25px' />
                                    {error && <div className="error"> {error} </div>}
                                </button>  
                            </form>

                            {/* EDIT THE Competition */}
                            <Link to={`/admin/editcompetition/${competition._id}` }>
                                    <RiEdit2Fill color='#367E18' size='25px' />
                            </Link>
                        
                            <div style={{width:'20px'}}></div>


                        </div>
                    
        </div>
    )

}

export default CompetitionDetails