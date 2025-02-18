"use client";

import EventList from "@/components/Events/EventList";
import Hero from "@/components/Hero";
import UpcommingEvents from "@/components/UpcommingEvents";
import { EventContext } from "@/context/EventContext";
import { useContext, useEffect } from "react";

const Home = () => {
  const { showEventList, handleClearSearch } = useContext(EventContext);
  return (
    <div className="">
      <Hero />
      <div className="flex flex-col justify-center items-center"></div>
      {showEventList ? (
        <div className="container mx-auto">
          <EventList />
        </div>
      ) : (
        <div>
          <div className="container mx-auto">
            <UpcommingEvents/>
            <div>download app section</div>
            <div>recomended events slider</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
