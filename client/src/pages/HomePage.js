import {Container, Row ,Col,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';
import useAuth from '../auth/useAuth'; 

export default function HomePage(){
    const { user } = useAuth()

    return(
        <Container>
            <Row className='mt-5'>
            <Col md={{span: 6, offset:3 }} className="mb-5">
                <h2>Bienvenidos a asociacion deportiva</h2>
                <p>¡Aquí podrás gestionar registrar tus equipos!</p>
                <div>

                {!user && (<>
                    <Col  className="mb-2" >
                    <Button as={Link} to={routes.login}>Ingresa</Button>  
                    </Col>
                    
                    <Col className="mb-2" >
                    <Button as={Link} to={routes.register} className= "ml-1" >Crear una cuenta</Button>
                    </Col>
                    </>
                )} 

                </div>
            </Col>
            <Col>
                <img 
                    className="img-fluid"
                    src = "/img/task-manager.svg"
                    alt = "gestor-de-tareas"
                />
                <p> Disfruta  del deporte</p>
            </Col>
            </Row>
        </Container>

    )
}