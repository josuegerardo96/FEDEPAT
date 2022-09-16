import {useState} from 'react'

export const useDeleteUser = () => {
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)

    const deleteuser = async (email)  => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/deleteuser',{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email})
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

            setIsLoading(false)
        }

    }

    return { deleteuser ,isLoading,error }
}