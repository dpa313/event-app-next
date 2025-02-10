"use client"

import Searchbar from "@/components/Searchbar/Searchbar"
import { EventContext } from "@/context/EventContext"
import { useContext } from "react"

const Home = () => {
  const {events} = useContext(EventContext)
  console.log(events);
  return (
    <div className="">
      <Searchbar/>
    </div>
  )
}

export default Home