"use client"
import React, {createContext, useEffect,useState,useMemo} from "react"

export const EventContext = createContext()

const EventProvider = ({children}) =>{
    const [events,setEvents] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)

    const [searchTerm,setSearchTerm] = useState("")

    // applied filter after submit
    const [appliedFilter,setAppliedFilter] = useState({
        searchTerm: ""
    })

    // filter events based on the applied filter
    const filterEvents = useMemo(()=>{
        return events.filter((event)=>{
            // check search item
            const matchesSearch = appliedFilter.searchTerm? event.title.toLowerCase().includes(appliedFilter.searchTerm.toLowerCase()) : true;

            return matchesSearch
        })
    },[events,appliedFilter])

    console.log(filterEvents);

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

    const handleSubmit = () =>{
        setIsLoading(true)
        setAppliedFilter({searchTerm})
        setTimeout(()=>{
            setIsLoading(false)
        },7500)
    }

    const handleClearSearch = () =>{
        setSearchTerm("")
    }
    return (
        <EventContext.Provider value={{events,isLoading,error, searchTerm,setSearchTerm,filterEvents,handleSubmit,handleClearSearch}}>
            {children}
        </EventContext.Provider>
    )
}

export default EventProvider;