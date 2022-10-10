import {useEffect, useState} from "react"
import {Container, Row ,Col,Card} from 'react-bootstrap'
import { useAcceptPlayer } from "../hooks/useAcceptPlayer"
import { useDeletePlayer } from "../hooks/useDeletePlayer"


const PlayerAcceptance = ({player}) =>{
    const { acceptplayer , erroraccept, isLoadingAccept } = useAcceptPlayer()
    const { deleteplayer , error, isLoading } = useDeletePlayer()
    const [equipo , SetEquipo] = useState({user:{
        email: "Cargando"
    }})

    useEffect(() => {
        const fetchWorkout = async (_id) =>{
            const response = await fetch('/api/user/getOneuser',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({_id})
            })
            const json = await response.json()
            
            if(response.ok){
                SetEquipo(json)
            }
        }
        fetchWorkout(player.equipo)
    },[player.equipo])
    
    //console.log("equipo")
    console.log(equipo)
    const handleSubmit = async(e) =>{
        e.preventDefault()

        await acceptplayer(player._id)
        
    }
    const handleAlternate = async(e) =>{
        e.preventDefault()
        console.log("hola")
        await deleteplayer(player._id)
        
    }
    return (
        
        <Container>
           
            <Row className='mt-4'>
            <Col xs={12} className="text-center"> 
            <Card style={{maxWidth: '360px' }} className="mx-auto">
            <h4>{player.email}</h4>
            <p><strong>rol: </strong>{player.apellidos}</p>
            <p><strong>Equipo: </strong>{equipo.user.email}</p>

            <form onSubmit={handleSubmit}>    
            <button disabled = { isLoadingAccept} onClick={() => window.location.reload(false)} >Aceptar</button>
            {erroraccept && <div className="error"> {erroraccept} </div>}
            </form>
            <form onSubmit={handleAlternate}>    
            <button disabled = { isLoading} onClick={() => window.location.reload(false)} >Rechazar</button>
            {error && <div className="error"> {error} </div>}
            </form>
            </Card>
            </Col>
            </Row>
            

        </Container>

    )

}

export default PlayerAcceptance