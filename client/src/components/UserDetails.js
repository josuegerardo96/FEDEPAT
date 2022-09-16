
import {Container, Row ,Col,Card} from 'react-bootstrap'
import { useDeleteUser } from "../hooks/useDeleteUser"

const UserDetails = ({user}) =>{
    const { deleteuser , error, isLoading } = useDeleteUser()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await deleteuser(user.email)
        
    }
    return (
        <Container>
            <Row className='mt-4'>
            <Col xs={12} className="text-center"> 
            <form className="login" onSubmit={handleSubmit}>
            <Card style={{maxWidth: '360px' }} className="mx-auto">
            <h4>{user.email}</h4>
            <p><strong>rol: </strong>{user.rol}</p>
            <p>{user.createdAt}</p>
        
            <button disabled = { isLoading} onClick={() => window.location.reload(false)} >Borrar</button>
            {error && <div className="error"> {error} </div>}
            </Card>
            </form>
            </Col>
            </Row>
        </Container>

    )

}

export default UserDetails