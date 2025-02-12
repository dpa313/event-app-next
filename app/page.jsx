"use client"

import EventList from "@/components/Events/EventList"
import Searchbar from "@/components/Searchbar/Searchbar"
import { EventContext } from "@/context/EventContext"
import { useContext } from "react"

const Home = () => {
  return (
    <div className="">
      <Searchbar/>
      <div className="container mx-auto">
        <EventList/>
      </div>
    </div>
  )
}

export default Home