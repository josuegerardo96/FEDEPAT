import {useState} from 'react'
//import useAuth    from '../auth/useAuth'

export const useSignupAdmin = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    //const { dispatch } = useAuth()

    const signup = async (email,password,rol,nombre,apellidos,telefono)  => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, rol, nombre, apellidos, telefono})
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