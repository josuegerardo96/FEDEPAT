import {useState} from 'react'
//import useAuth    from '../auth/useAuth'

export const useAddPlayer = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    //const { dispatch } = useAuth()

    const addplayer = async (email,nombre, apellidos, telefono,identificacion,gender,nacimiento,equipo,estado)  => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/player/playersignup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,nombre, apellidos, telefono,identificacion,gender,nacimiento,equipo,estado})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
         
            //window.location.replace("/admin/registeradmin")  
            window.location.replace("/addplayer")
            setIsLoading(false)
        }
    
    }

    return { addplayer,isLoading,error }
}