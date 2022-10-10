import {useState} from 'react'

export const useAcceptPlayer = () => {
    const [erroraccept, setErrorAccept] = useState(null)
    const [isLoadingAccept,setIsLoadingAccept] = useState(null)

    const acceptplayer = async (_id)  => {

        setIsLoadingAccept(true)
        setErrorAccept(null)

        const response = await fetch('/api/player/acceptPlayer',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id})
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

    return { acceptplayer ,erroraccept,isLoadingAccept }
}