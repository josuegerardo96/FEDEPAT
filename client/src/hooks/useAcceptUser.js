import {useState} from 'react'

export const useAcceptUser = () => {
    const [erroraccept, setErrorAccept] = useState(null)
    const [isLoadingAccept,setIsLoadingAccept] = useState(null)

    const acceptuser = async (email)  => {

        setIsLoadingAccept(true)
        setErrorAccept(null)

        const response = await fetch('/api/user/acceptuser',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoadingAccept(false)
            setErrorAccept(json.error)

        }
        if(response.ok){
            //save the user to local storage
            //localStorage.setItem('user',JSON.stringify(json))

            // update the auth context
            //dispatch({type: 'LOGIN',payload:json})

            setIsLoadingAccept(false)
        }

    }

    return { acceptuser ,erroraccept,isLoadingAccept }
}