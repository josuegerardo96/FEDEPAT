import { useState } from 'react';
import {Container, Row ,Col,Card} from 'react-bootstrap'
import useAuth from '../../auth/useAuth'
import DeleteModal from './components/DeleteModal';


export default function AccountPage(){
    const {user} = useAuth();
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const openDeleteModal = () => setIsOpenDeleteModal(true);
    const closeDeleteModal = () => setIsOpenDeleteModal(false);

    return(
        <>
        <Container>
            <Row className='mt-4'>
                <Col xs={12} className="text-center"> 

                <img
                    src= "/img/male_avatar.svg"
                    alt = "profile"
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        objectFit: 'cover'

                    }}
                />

                </Col>
                <Col className='mt-4'>
                    <Card style={{maxWidth: '360px' }} className="mx-auto">
                    <p className='text-center'><b>Correo: </b>{user.email}</p>
                    <p className='text-center'><b>Nombre: </b>{user.user.nombre}</p>
                    <p className='text-center'><b>Apellidos: </b>{user.user.apellidos}</p>
                    <p className='text-center'><b>Telefono: </b>{user.user.telefono}</p>
                    <p className='text-center'><b>Rol: </b>{user.user.rol}</p>


                    </Card>
         
                </Col>
                
            </Row>

        </Container>
        <DeleteModal
            isOpen = {isOpenDeleteModal} 
            close = {closeDeleteModal}
        />
        </>
        
    )
}