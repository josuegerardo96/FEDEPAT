import { useEffect, useState, } from "react";
import {Container, Row ,Col,Card} from 'react-bootstrap'
import { useEditAccount } from "../../hooks/useEditAccount"
import useAuth from "../../auth/useAuth";

const EditAccount = () => {
    const  { user } = useAuth();
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [nombre, setNombre] = useState ('')
    const [apellidos, setApellidos] = useState ('')
    const [telefono, setTelefono] = useState ('')


    const { edit , error, isLoading } = useEditAccount()

    useEffect(() => {
        setEmail(user.email)
        setNombre(user.user.nombre)
        setApellidos(user.user.apellidos)
        setTelefono(user.user.telefono)
        //setPassword(user.user.password)
    }, [user.email, user.user.nombre, user.user.apellidos, user.user.telefono]);

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await edit(user.user._id,email,password,nombre, apellidos, telefono)

    }

    return (
        <Container>
            <Row className='mt-4'>
            <Col className='mt-4'> 
        <form className="login" onSubmit={handleSubmit}>
        <Card style={{maxWidth: '360px' }} className="mx-auto">
            <h3>Editar</h3>
            
            <label>Cambiar Nombre</label>
            <input
                type = "text"
                placeholder="Escriba su nombre"
                onChange={(e) => setNombre(e.target.value)}
                value = {nombre}
            />

            <label>Cambiar Apellidos</label>
            <input
                type = "text"
                placeholder="Escriba sus apellidos"
                onChange={(e) => setApellidos(e.target.value)}
                value = {apellidos}
             />

            <label>Cambiar Teléfono</label>
            <input
                type = "tel"
                placeholder="Escriba un telefono"
                onChange={(e) => setTelefono(e.target.value)}
                value = {telefono}
                />

            <label>Cambiar Email</label>
            <input
                type = "email"
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
            />
            
            <label>Cambiar Contraseña o manter la misma</label>
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