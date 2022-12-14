import { useState } from "react";
import { useSignup } from "../../hooks/useSignUp";
import roles from "../../helpers/roles";
import fedepat from '../../images/Fedepat_bg.png';
import './RegisterPage.css';
import { toast } from "react-toastify"
import { useImageUpload } from "../../hooks/useImageUpload";
import { RiUpload2Fill } from "react-icons/ri";

const Signup = () => {


    // Constants that control the app's flow
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [telefono, setTelefono] = useState('')
    const [cedula, setCedula] = useState('')
    const [cedulaphoto, setCedulaPhoto] = useState('')
    const [state, setState] = useState('');
    
    //const [rol, setRol] = useState ('')
    const { signup, error, isLoading } = useSignup()


    // const to save the image uploaded
    const { imagecedula } = useImageUpload()


    const chekboxState = () => {
        var isChecked = document.getElementById('chekVal').checked;
        setState(isChecked)
    }

    // Constant function that control the form
    const handleSubmit = async (e) => {
        if (!state) {
            e.preventDefault()
            toast.error("No ha acepatado términos y condiciones")
        }
        else {
            e.preventDefault()

            // Check if the image was uploaded
            try {
                if(cedulaphoto === '' ){
                    console.log("falta imagen")
                }
                else{
                    
                    // proceed with the sign up
                    await signup(email, password, roles.delegado, nombre, apellidos, telefono, false)

                    const fetchWorkout = async (email) =>{
                        const response = await fetch('/api/user/getOneuseremail',{
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({email})
                        })
                        const json = await response.json()
                        
                        if(response.ok){
                            const formData = new FormData()
                            formData.append('name', cedulaphoto.name);
                            formData.append('fedeimage', cedulaphoto);
                            formData.append('categoria', 'cedula');
                            formData.append('user', json.user._id);
                            await imagecedula( formData); 
        
                        }
                    }
                    fetchWorkout(email)
                }
                
            } catch (error) {
                console.log(error)
            }
        }
    }



    // saves the image into this space 
    const SingleFileChange = (e) => {
        setCedulaPhoto(e.target.files[0]);
    }




    return (

        <div>

            {/* =============== HALF-LEFT OF THE SCREEN ========================== */}
            <div className="Main-Container">
                <img className="Main-Img" src={fedepat} alt="Fedepat" />
                <p className='Logo-Text'>Federación costarricense de <br /> Patinaje y Deportes afines</p>
            </div>





            {/* =============== HALF-RIGHT OF THE SCREEN ========================== */}   
            <form onSubmit={handleSubmit} className='Main-Login'>


                {/* Page title */}
                <h3 className="Title">Registro de delegado</h3>


                {/* Put the elements next to other */}
                <div className="Line-Inputs">
                    {/* User's name */}
                    <div className="Line-Inputs-Blocks">
                        <label className="Sub-Title">Nombre</label>
                        <input
                            className="Input-Personal-Data"
                            type="text"
                            placeholder="Escriba su nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                        />
                    </div>



                    {/* User's Last name */}
                    <div className="Line-Inputs-Blocks">
                        <label className="Sub-Title">Apellidos</label>
                        <input
                            className="Input-Personal-Data"
                            type="text"
                            placeholder="Escriba sus apellidos"
                            onChange={(e) => setApellidos(e.target.value)}
                            value={apellidos}
                        />
                    </div>

                </div>

                {/* Put the elements next to each other */}
                <div className="Line-Inputs">


                    {/* User's email */}
                    <div className="Line-Inputs-Blocks">
                        <label className="Sub-Title">Email</label>
                        <input
                            className="Input-Personal-Data"
                            type="email"
                            placeholder="Escriba su email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>


                    {/* User's cellphone number */}
                    <div className="Line-Inputs-Blocks">
                        <label className="Sub-Title">Teléfono</label>
                        <input
                            className="Input-Personal-Data"
                            type="text"
                            placeholder="8888 88 88"
                            onChange={(e) => setTelefono(e.target.value)}
                            value={telefono}
                        />
                    </div>

                </div>

                {/* Put the elements next to each other */}
                <div className="Line-Inputs">


                    {/* User's cedula */}
                    <div className="Line-Inputs-Blocks">
                        <label className="Sub-Title">Cédula</label>
                        <input
                            className="Input-Personal-Data"
                            type="text"
                            placeholder="Cédula"
                            onChange={(e) => setCedula(e.target.value)}
                            value={cedula}
                        />

                        
                    </div>
                    


                    {/* User's image comprobation */}
                    <div className="Line-Inputs-Blocks">
                    <label className="Sub-Title"></label>
                        <input
                            type="file"
                            id='imagenFile'
                            onChange={(e) => {
                                if (e.target.files[0].size / (1024*1024) > 1){
                                    return toast.error('La imagen es muy pesada, utilice una imagen más pequeña')
                                }else{
                                    return SingleFileChange (e)
                                }
                            }  }/>
                        

                        <div
                        className= {cedulaphoto === '' ? 
                            "Input-Personal-Image-NOT" : 
                            "Input-Personal-Image-YES"}>

                                <RiUpload2Fill size='15px' color='#FFF'/>
                                {
                                    cedulaphoto === '' ?
                                        <label for='imagenFile'  className="Input-Personal-Image-Text">Subir comprobante de pago</label>:
                                        <label for='imagenFile'  className="Input-Personal-Image-Text">Comprobante cargado</label>

                                }
                                
                        </div>
                                

                    </div>



                    

                </div>


                {/* User's password */}
                <label className="Sub-Title-Password">Contraseña</label>
                <input
                    className="Input-Personal-Password"
                    type="password"
                    placeholder="Escriba su contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            
            <label className="Password-Issues-Text" style={{marginTop:'10px'}}>La contrasena debe contener:</label>
                <div className="Password-Issues">
                    <label className="Password-Issues-Text">- Mínimo 6 caracteres</label>
                    <label className="Password-Issues-Text">- Un caracter especial (!@%&...)</label>
                    <label className="Password-Issues-Text">- 3 números</label>
                </div>

            
            

            {/* Checkbox para terminos y condiciones*/}
            <div className="Terminos-checkbox">
                <input 
                    type="checkbox" 
                    id="chekVal" 
                    name="topping" 
                    value="Paneer" 
                    onChange={()=>chekboxState()} />
                <label className="Terminos-Texto-pantalla">Acepto los</label><a href="#openModal" className="Terminos-Texto-pantalla-link">términos y condiciones</a>
            </div>
            
            
            {/* Ventana emergente con los terminos y condiciones */}
            <div id="openModal" className="modalDialog">
                <div>
                    <a href="#closemodal" title="Close" className="closemodal">X</a>
                        <label className="Terminos-Texto-Titulo">Términos y condiciones</label>
                        <label className="Terminos-Texto-Cuerpo">  
                            Los Términos y Condiciones representan el documento que ayuda a prevenir y resolver los problemas. 
                            Por ello, son fundamentales en muchos casos para defenderse en caso de abuso. Las Condiciones de servicio establecen 
                            la forma en que se puede utilizar tu producto, servicio o contenido de forma legalmente vinculante.
                        </label>
                </div>
            </div>



             {/* Sign up button */}
                <button disabled = {isLoading} className="Button-Signup">Registrarse</button>
                {error && <div  className= "error" >{error}</div>}
        
      
        </form>

        </div>

    )
}

export default Signup