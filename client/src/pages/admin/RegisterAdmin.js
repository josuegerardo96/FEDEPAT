import { useState } from "react";
import {Container, Row ,Col,Card} from 'react-bootstrap'
import { useSignupAdmin } from "../../hooks/useSignUpAdmin";
import roles from "../../helpers/roles"

const SignupAdmin = () => {
        // Constants that control the app's flow

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [nombre, setNombre] = useState ('')
    const [apellidos, setApellidos] = useState ('')
    const [telefono, setTelefono] = useState ('')

    const {signup, error, isLoading } = useSignupAdmin()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await signup(email, password,roles.admin,nombre,apellidos,telefono)
    }

    return (
        <Container>
            <Row className='mt-4'>
            <Col className='mt-4'> 
        <form className="signup" onSubmit={handleSubmit}>
        <Card style={{maxWidth: '360px' }} className="mx-auto">
            <h3>Registro Administrador</h3>

            <label>Nombre</label>
            <input
                type = "text"
                placeholder="Escriba su nombre"
                onChange={(e) => setNombre(e.target.value)}
                value = {nombre}
            />

            <label>Apellidos</label>
            <input
                type = "text"
                placeholder="Escriba sus apellidos"
                onChange={(e) => setApellidos(e.target.value)}
                value = {apellidos}
             />

            <label>Teléfono</label>
            <input
                type = "tel"
                placeholder="Escriba un telefono"
                onChange={(e) => setTelefono(e.target.value)}
                value = {telefono}
                />

            <label>Email       </label>
            <input
                type = "email"
                placeholder="Escriba su email"
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
            />
    
            <label>Contraseña</label>
            <input
                type = "password"
                placeholder="Escriba su contraseña"
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