import {useState} from 'react'
import { toast } from "react-toastify"
//import useAuth    from '../auth/useAuth'

export const useAddPlayerComp = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    //const { dispatch } = useAuth()

    const addplayer = async (competencia,jugador,categoria)  => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/registcomp/registrocomp',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({competencia,jugador,categoria})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            toast.success("Registro Hecho!")
            //window.location.replace("/admin/registeradmin")  
            //window.location.replace("/")
            setIsLoading(false)
        }
    
    }

    return { addplayer,isLoading,error }
}