"use client"
import {createContext, useState,useEffect} from 'react'

export const TicketContext = createContext()

const TicketProvider = ({children})=>{
    const [event,setEvent] = useState(null)
    const [seat,setSeat] = useState({seat:null, price:null})
    const [showMenu,setShowMenu] = useState(false)
    const [itemAmount,setItemAmount] = useState(1)
    const [totalPrice,setTotalPrice] = useState(0)
    const [checkoutData,setCheckoutData] = useState(null)

    const initializeEvent = (fetchedEvent) =>{
        setEvent(fetchedEvent)
        setItemAmount(1)

        const frontSeat = fetchedEvent?.seats?.find((seat)=>seat.seat === "frontseat")
        if(frontSeat){
            setSeat({seat: frontSeat.seat, price:frontSeat.price})
        }
    }

    // effect to handle click outside of the menu to close it
    useEffect(()=>{
        const handleClickOutside = e =>{
            if(!e.target.closest(".custom-select")){
                setShowMenu(false)
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () =>{
            document.removeEventListener("click",handleClickOutside)
        }
        },[])

    // calculate total price whenever the seat price or item amount change
    useEffect(()=>{
        setTotalPrice(seat.price*itemAmount)
    },[seat.price,itemAmount])

    //function to handle the seat selection
    const handleSeat = (seat,price)=>{
        setSeat({seat,price})
        setShowMenu(false)
    }

    //function to handle "buy now"
    const buyNow = (event) =>{
        const ticketData = {
            eventId: event.id,
            eventName: event.title,
            ticketType: seat.seat,
            ticketPrice: seat.price,
            amount: itemAmount,
            totalPrice
        }
        setCheckoutData(ticketData) // in case if we want to use the data for the checkout page
        console.log(checkoutData);
    }

    const increaseAmount = () =>{
        setItemAmount((prevAmount)=> prevAmount +1)
    }

    const decreaseAmount = () =>{
        setItemAmount((prevAmount)=> prevAmount >1 ?prevAmount-1: 1)
    }
    return (
        <TicketContext.Provider value={{event,seat,showMenu,itemAmount,totalPrice,checkoutData,handleSeat,setSeat,setShowMenu,buyNow,initializeEvent,increaseAmount,decreaseAmount}}>
            {children}
        </TicketContext.Provider>
    )
}

export default TicketProvider;