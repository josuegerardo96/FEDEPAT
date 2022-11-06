import {useState} from 'react'
//import useAuth    from '../auth/useAuth'

export const useSignupCompetition = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    //const { dispatch } = useAuth()

    const signup = async (nombre,categoria,tipo,ubicación,genero)  => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/competition/singupCompetition',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nombre, categoria, tipo, ubicación, genero})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
         
            //window.location.replace("/admin/registeradmin")  
            window.location.reload();     
            setIsLoading(false)
        }
    
    }

    return { signup,isLoading,error }
}