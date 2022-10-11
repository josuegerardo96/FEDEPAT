import {useState} from 'react'


export const useEditPlayer = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    

    const editplayer = async (_id,email,nombre,apellidos, telefono, identificacion,gender,nacimiento)  => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/player/editplayer',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id,email,nombre,apellidos, telefono, identificacion,gender,nacimiento})
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

    return { editplayer ,isLoading,error }
}