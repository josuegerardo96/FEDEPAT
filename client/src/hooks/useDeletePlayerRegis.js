import {useState} from 'react'

export const useDeletePlayerRegis = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)

    const deleteplayer = async (_id)  => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/registcomp/deleteregistro',{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id})
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
            window.location.reload();
            setIsLoading(false)
        }

    }

    return { deleteplayer ,isLoading,error }
}