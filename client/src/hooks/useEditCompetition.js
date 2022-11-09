import {useState} from 'react'


export const useEditPlayer = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    

    const editcompetition = async (_id,nombre, tipo,provincia, ubicación, fecha)  => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/competition/editCompetition',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id,nombre, tipo,provincia, ubicación, fecha})
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
            window.location.replace("/admin/vercompetencia")
            setIsLoading(false)

        }

    }

    return { editcompetition ,isLoading,error }
}