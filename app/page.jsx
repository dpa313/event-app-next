"use client";

import DownloadApp from "@/components/DownloadApp";
import EventList from "@/components/Events/EventList";
import Hero from "@/components/Hero";
import RecomendedEvents from "@/components/RecomendedEvents";
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
            <DownloadApp/>
            <RecomendedEvents/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
