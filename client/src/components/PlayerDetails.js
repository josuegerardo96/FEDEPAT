
import {Container, Row ,Col,Card} from 'react-bootstrap'

import { Link } from 'react-router-dom';

import { useDeletePlayer } from "../hooks/useDeletePlayer"


const PlayerDetails = ({player}) =>{
    const { deleteplayer , error, isLoading } = useDeletePlayer()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await deleteplayer(player._id)
        
    }

  

    return (
        
        <Container>

        {player.estado && (
            <Row className='mt-4'>
            <Col xs={12} className="text-center"> 
            <form className="login" onSubmit={handleSubmit}>
            <Card style={{maxWidth: '360px' }} className="mx-auto">
            <h4>{player.email}</h4>
            <p><strong>Nombre: </strong>{player.nombre}</p>
            <p><strong>Apellido: </strong>{player.apellidos}</p>
            <p><strong>Identificacion: </strong>{player.identificacion}</p>
            <p><strong>Telefono: </strong>{player.telefono}</p>



        
            <button disabled = { isLoading} onClick={() => window.location.reload(false)} >Borrar</button>
            {error && <div className="error"> {error} </div>}

            <Link to={`/editplayer/${player._id}` }> Edit </Link>
            </Card>
            </form>
            </Col>
            </Row>
            )}
        </Container>

    )

}

export default PlayerDetails