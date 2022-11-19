import { Link } from 'react-router-dom';
import { useDeleteCompetiton } from "../hooks/useDeleteCompetition"
import { useDeleteCompJugadores  } from "../hooks/UseDeleteCompJugadores"
import {RiDeleteBinFill, RiEdit2Fill} from "react-icons/ri";
import './CompetitionDetails.css';





const CompetitionDetails = ({competition}) =>{
    const { deletecompetition , error, isLoading } = useDeleteCompetiton()
    const { deletecompetition2 ,error2 } = useDeleteCompJugadores()
    const current = new Date(competition.fecha)
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${("0" + current.getDate()).slice(-2)}`;

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await  deletecompetition2 (competition._id)
        await deletecompetition(competition._id)

        
        
    }

  

    return (



        <div className='Competiciones-caja'>
            

            
                   
                        <label className='Competiciones-caja-textonormal'><strong>Competencia.</strong><br/>{competition.nombre}</label>
                        <label className='Competiciones-caja-textonormal'>{competition.tipo}</label>
                        <label className='Competiciones-caja-textonormal'><strong>Provincia</strong><br/>{competition.provincia}</label>
                        <label className='Competiciones-caja-textonormal'><strong>Ubicación</strong><br/>{competition.ubicación}</label>
                        <label className='Competiciones-caja-textonormal'><strong>Fecha Inicio</strong><br/>{date}</label>
                

                        <div className='Competiciones-caja-rol-icon'>
                            







                            {/* Delete THE COMPETITON */}
                            <form onSubmit={handleSubmit}>    
                                <button className='botonFORM' disabled = { isLoading}  >
                                    <RiDeleteBinFill color='#CD1F28' size='25px' />
                                    {error && <div className="error"> {error} </div>}
                                    {error2 && <div className="error"> {error2} </div>}
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