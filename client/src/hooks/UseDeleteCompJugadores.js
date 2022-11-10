import {useState} from 'react'

export const useDeleteCompJugadores = () => {
    const [error2, setError2] = useState(null)
    const [isLoading2,setIsLoading2] = useState(null)

    const deletecompetition2 = async (competencia)  => {

        setIsLoading2(true)
        setError2(null)

        const response = await fetch('/api/registcomp/Deleteallcomp',{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({competencia})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading2(false)
            setError2(json.error)

        }
        if(response.ok){
            //save the user to local storage
            //localStorage.setItem('user',JSON.stringify(json))

            // update the auth context
            //dispatch({type: 'LOGIN',payload:json})

            setIsLoading2(false)
        }

    }

    return { deletecompetition2 ,isLoading2,error2 }
}