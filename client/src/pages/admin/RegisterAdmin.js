import { useState } from "react";
import {Container, Row ,Col,Card} from 'react-bootstrap'
import { useSignupAdmin } from "../../hooks/useSignUpAdmin";
import roles from "../../helpers/roles"

const SignupAdmin = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const {signup, error, isLoading } = useSignupAdmin()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await signup(email, password,roles.admin)
    }

    return (
        <Container>
            <Row className='mt-4'>
            <Col className='mt-4'> 
        <form className="signup" onSubmit={handleSubmit}>
        <Card style={{maxWidth: '360px' }} className="mx-auto">
            <h3>Registro Administrador</h3>
            <label>Email       </label>
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

            
            <button daisbled = {isLoading}>Entrar</button>
            {error && <div  className= "error" >{error}</div>}
        
            </Card>
        </form>
        </Col>
        
        </Row>
        </Container>

    )
}

export default SignupAdmin