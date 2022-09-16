import { useEffect, useState, } from "react";
import {Container, Row ,Col,Card} from 'react-bootstrap'
import { useEditAccount } from "../../hooks/useEditAccount"
import useAuth from "../../auth/useAuth";

const EditAccount = () => {
    const  { user } = useAuth();
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const { edit , error, isLoading } = useEditAccount()

    useEffect(() => {
        setEmail(user.email)
        //setPassword(user.user.password)
    },[])

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await edit(user.user._id,email,password)

    }

    return (
        <Container>
            <Row className='mt-4'>
            <Col className='mt-4'> 
        <form className="login" onSubmit={handleSubmit}>
        <Card style={{maxWidth: '360px' }} className="mx-auto">
            <h3>Editar</h3>
            <label>cambiar Email</label>
            <input
                type = "email"
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
            />
            <label>cambiar Contraseña o manter la misma</label>
            <input
                type = "password"
                onChange={(e) => setPassword(e.target.value)}
                value = {password}
            />

            <button disabled = { isLoading } >Editar</button>
            {error && <div className="error"> {error} </div>}
            </Card>
        </form>
        </Col>
        </Row>
        </Container>
    )
}

export default EditAccount