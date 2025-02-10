"use client"
import React, {createContext, useEffect,useState,useMemo} from "react"

export const EventContext = createContext()

const EventProvider = ({children}) =>{
    const [events,setEvents] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)

    // fetch event
    useEffect(()=>{
        const fetchEvents = async() =>{
            // start loading
            setIsLoading(true)
            try{
                const res = await fetch("http://localhost:4000/events")
                if(!res.ok) throw new Error("Failed to fetch events")
                const data = await res.json()
                setEvents(data)
                setIsLoading(false)
            }catch(err){
                setError(err.message)
                setIsLoading(false)
            }
        }
        fetchEvents()
    },[])
    return (
        <EventContext.Provider value={{events}}>
            {children}
        </EventContext.Provider>
    )
}

export default EventProvider;