import { Link } from 'react-router-dom';
//import { useDeleteCompetiton } from "../hooks/useDeleteCompetition"
import { FcSportsMode,FcApprove } from "react-icons/fc";
//import Moment from 'moment';
import './CompetitionDetails.css';





const CompetitionDetails = ({competition}) =>{
    //const { deletecompetition , error, isLoading } = useDeleteCompetiton()
    const current = new Date(competition.fecha)
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${("0" + current.getDate()).slice(-2)}`;

    /*const handleSubmit = async(e) =>{
        e.preventDefault()

        await deletecompetition(competition._id)
        
    }*/

  

    return (



        <div className='Competiciones-caja'>
            

            
                   
                        <label className='Competiciones-caja-textonormal'><strong>Competencia.</strong><br/>{competition.nombre}</label>
                        <label className='Competiciones-caja-textonormal'>{competition.tipo}</label>
                        <label className='Competiciones-caja-textonormal'><strong>Provincia</strong><br/>{competition.provincia}</label>
                        <label className='Competiciones-caja-textonormal'><strong>Ubicación</strong><br/>{competition.ubicación}</label>
                        <label className='Competiciones-caja-textonormal'><strong>Fecha Inicio</strong><br/>{date}</label>
                

                        <div className='Competiciones-caja-rol-icon'>
                            


                            {/* Delete THE COMPETITON 
                            <form onSubmit={handleSubmit}>    
                                <button className='botonFORM' disabled = { isLoading} onClick={() => window.location.reload(false)} >
                                    <RiDeleteBinFill color='#CD1F28' size='25px' />
                                    {error && <div className="error"> {error} </div>}
                                </button>  
                            </form>
                            */}

                            <div className='botones-registro'>

                            {/* Registrar jugador */}
                            <Link to={`/registrarplayer/${competition._id}` } style={{textDecoration:'none'}} >

                                <div className='boton-registrar'>
                                    <label className='boton-texto'>Registrar un jugador</label>
                                </div>

                                 {/* <FcSportsMode color='#CD1F28' size='25px' /> */}
                            </Link>

                            <div style={{height:'20px'}}></div>

                            <Link to={`/verregistrados/${competition._id}` } style={{textDecoration:'none'}}>
                                <div className='boton-ver-registrados'>
                                    <label className='boton-texto'>jugadores en competencia</label>
                                </div>
                                {/* <FcApprove color='#CD1F28' size='25px' /> */}
                            </Link>
                        
                            <div style={{width:'20px'}}></div>
                            </div>

                        </div>
                    
        </div>
    )

}

export default CompetitionDetails