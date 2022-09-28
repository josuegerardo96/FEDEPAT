
import {Container, Row ,Col,Card} from 'react-bootstrap'
import { useAcceptUser } from "../hooks/useAcceptUser"
import useAuth from '../auth/useAuth'
import { useDeleteUser } from "../hooks/useDeleteUser"

const UserAcceptance = ({user}) =>{
    const { acceptuser , erroraccept, isLoadingAccept } = useAcceptUser()
    const { deleteuser , error, isLoading } = useDeleteUser()

    const  auth  = useAuth();
    const handleSubmit = async(e) =>{
        e.preventDefault()

        await acceptuser(user.email)
        
    }
    const handleAlternate = async(e) =>{
        e.preventDefault()
        console.log("hola")
        await deleteuser(user.email)
        
    }
    return (
        
        <Container>
            {auth.user.email !== user.email && !user.estado && (
            <Row className='mt-4'>
            <Col xs={12} className="text-center"> 
            <Card style={{maxWidth: '360px' }} className="mx-auto">
            <h4>{user.email}</h4>
            <p><strong>rol: </strong>{user.rol}</p>
            <p>{user.createdAt}</p>
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
            )}

        </Container>

    )

}

export default UserAcceptance