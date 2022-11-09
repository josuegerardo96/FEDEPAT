import { useState } from "react"
//import { Link } from 'react-router-dom';
import { useAddPlayerComp } from "../hooks/useAddPlayerComp"
import { toast } from "react-toastify"
//import {RiDeleteBinFill, RiEdit2Fill} from "react-icons/ri";
import Moment from 'moment';
import './UserAcceptance.css';





const PlayerDetailsRegis = ({ player, compid }) => {
    const { addplayer, error, isLoading } = useAddPlayerComp()
    const [categoria, setCategoria] = useState('Prejuvenil (13-14 años)')
    const current = new Date(player.nacimiento)
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${("0" + current.getDate()).slice(-2)}`;


    function getAge(dateString) 
    {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        var numb = categoria.match(/\d+/g);
        var edad = getAge(date)
        if(numb.length>1){
            var numb1 = +numb[0]
            var numb2 = +numb[1]
            if(numb1<= edad && numb2 >= edad ){
                await addplayer(compid, player._id, categoria)
            }else{
                toast.error("No puede registrarse su edad no coincide la edad es: "+ " " + edad)
            }
        }else {
            numb1 = +numb[0]
            console.log(numb1)
            if(numb1<= edad && numb1 > 12){
                await addplayer(compid, player._id, categoria)
            }else if(numb1 <= 12 && numb1===edad){
                await addplayer(compid, player._id, categoria)
            }
            else{
                toast.error("No puede registrarse su edad no coincide, la edad es: "+ " " + edad)
            }
        }


        //

    }



    return (



        <div className='Solicitudes-caja'>


            <label className='Solicitudes-caja-textonormal'>{player.nombre}<br />{player.apellidos}</label>
            <label className='Solicitudes-caja-textonormal'>+506 {player.telefono}<br />{player.email}</label>
            <label className='Solicitudes-caja-textonormal'>
                Cédula: {player.identificacion}<br />
                Nacimiento: {Moment(player.nacimiento).format("DD-MM-YYYY")} <br />
            </label>
            <label className='Solicitudes-caja-textonormal'>{player.gender === true ? 'Mujer' : 'Hombre'}</label>

            <select name="catec" id="catec" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
                <option value="Prejuvenil (13-14 años)">Prejuvenil (13-14 años)</option>
                <option value="Juvenil (15-18 años)">Juvenil (15-18 años)</option>
                <option value="Mayor (19 y más años)">Mayor (19 y más años)</option>
                <option value="Open (15 y más años)">Open (15 y más años)</option>

                <option value="Infantil C (8 años)">Infantil C (8 años)</option>
                <option value="Infantil B2 (9 años)">Infantil B2 (9 años)</option>
                <option value="Infantil B1 (10 años)">Infantil B1 (10 años)</option>
                <option value="Infantil A2 (11 años)">Infantil A2 (11 años)</option>
                <option value="Infantil A1 (12 años)">Infantil A1 (12 años)</option>

            </select>

            <div className='Solicitudes-caja-rol-icon'>



                {/* REJECT THE PLAYER */}
                <form onSubmit={handleSubmit}>
                    <button className='botonFORM' disabled={isLoading}  >
                        {!error && <div> Registrar </div>}
                        {error && <div className="error"> El jugador ya fue registrado anteriormente </div>}
                    </button>
                </form>



                {/* EDIT THE PLAYER 
                            <Link to={`/editplayer/${player._id}` }>
                                    <RiEdit2Fill color='#367E18' size='25px' />
                            </Link>
                        
                            <div style={{width:'20px'}}></div>
                            */}

            </div>

        </div>
    )

}

export default PlayerDetailsRegis