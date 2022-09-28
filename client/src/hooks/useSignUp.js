import {useState} from 'react'
//import useAuth    from '../auth/useAuth'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    //const { dispatch } = useAuth()

    const signup = async (email,password,rol,nombre,apellidos,telefono,estado)  => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, rol, nombre, apellidos, telefono,estado})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)

        }
        if(response.ok){
            //save the user to local storage
            //localStorage.setItem('user',JSON.stringify(json))

            // update the auth context
            //dispatch({type: 'LOGIN',payload:json})
            window.location.replace("/")
            setIsLoading(false)
        }

    }

    return { signup,isLoading, error }
}