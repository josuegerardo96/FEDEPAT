import { useState } from "react";
import {Container, Row ,Col,Card} from 'react-bootstrap'
import { useLogin } from "../hooks/useLogin"


const Login = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const { login , error, isLoading } = useLogin()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await login(email,password)
    }

    return (
        <Container>
            <Row className='mt-4'>
            <Col className='mt-4'> 
        <form className="login" onSubmit={handleSubmit}>
        <Card style={{maxWidth: '360px' }} className="mx-auto">
            <h3>Iniciar sesion</h3>
            <label>Email</label>
            <input
                type = "email"
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
            />
            <label>Contraseña</label>
            <input
                type = "password"
                onChange={(e) => setPassword(e.target.value)}
                value = {password}
            />

            <button disabled = { isLoading } >Entrar</button>
            {error && <div className="error"> {error} </div>}
            </Card>
        </form>
        </Col>
        </Row>
        </Container>
    )
}

export default Login

