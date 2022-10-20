import { useEffect, useState, } from "react";
import { useEditAccount } from "../../hooks/useEditAccount"
import useAuth from "../../auth/useAuth";
import edit_profile from '../../images/edit_profile.png';
import './EditAccount.css';


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
        
        <div className="Edit">

            <form className="Edit-form" onSubmit={handleSubmit}>


                {/* Put the elements next to other */}

                <div className="Adminadd-Line-Inputs">

                    {/* User's name */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label  className="Adminadd-Sub-Title">Nombre</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type = "text"
                            placeholder="Escriba su nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value = {nombre}
                        />
                    </div>
                    


                    {/* User's Last name */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label  className="Adminadd-Sub-Title">Apellidos</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type = "text"
                            placeholder="Escriba sus apellidos"
                            onChange={(e) => setApellidos(e.target.value)}
                            value = {apellidos}
                        />
                    </div>

                </div>




                {/* Put the elements next to each other */}
                <div className="Adminadd-Line-Inputs">
                    
                    
                
                    {/* User's email */}                        
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label  className="Adminadd-Sub-Title">Email</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type = "email"
                            placeholder="Escriba su email"
                            onChange={(e) => setEmail(e.target.value)}
                            value = {email}
                        />
                    </div>


                    {/* User's cellphone number */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label  className="Adminadd-Sub-Title">Teléfono</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type = "text"
                            placeholder="8888 88 88"
                            onChange={(e) => setTelefono(e.target.value)}
                            value = {telefono}
                        />
                    </div>

                </div>

                {/* User's password */}
                <label  className="Adminadd-Sub-Title-Password">Contraseña</label>
                <input
                    className="Adminadd-Input-Personal-Password"
                    type = "password"
                    placeholder="Escriba su contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value = {password}
                />

                

                {/* Sign up button */}
                <button 
                    disabled = {isLoading} 
                    className="Adminadd-Button-Signup">
                        Actualizar perfil
                </button>
                {error && <div  className= "error" >{error}</div>}
                
            </form>


            <div className="Edit-Right">
                <img className="Edit-Right-Img" src={edit_profile} alt="Imagen de admin"/>
            </div>
        
        </div>
    )
}

export default EditAccount