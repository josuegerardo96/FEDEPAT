import {useState} from 'react'


export const useEditAccount = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    

    const edit = async (_id,email,password,nombre, apellidos, telefono)  => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/editUser',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id,email, password,nombre, apellidos, telefono})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)

        }
        if(response.ok){
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(json))
            // update the auth context
            //dispatch({type: 'LOGIN',payload:json})
            window.location.replace("/")
            setIsLoading(false)

        }

    }

    return { edit ,isLoading,error }
}