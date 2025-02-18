import { EventContext } from "@/context/EventContext";
import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { BiMap } from "react-icons/bi";

const EventLocation = () => {
  const { events, selectedLocation, setSelectedLocation } =
    useContext(EventContext);

  // generate a list of unique locations from future events
  const uniqueLocations = [
    "All locations", // default option to display all location
    //use set to remove duplicate locations
    ...new Set(
      events
        .filter((event) => {
          const eventDate = new Date(event.date); // convert event date to Date object
          const currentDate = new Date();

          //include events that occur after the current date
          if (eventDate > currentDate) return true;

          //include events happens today but if the time not yet passed
          if (eventDate.toDateString() === currentDate.toDateString()) {
            const eventTime = eventDate.getTime();
            const currentTime = currentDate.getTime();
            return eventTime > currentTime;
          }

          //exclude passed events
          return false;
        })
        .map((event) => event.location)
    ),
  ];
  // console.log(uniqueLocations);
  return (
    <div className="flex items-center gap-[10px] w-full xl:w-[190px] select-none">
      <div className="text-lg text-accent">
        <BiMap />
      </div>
      <Select
        value={selectedLocation}
        onValueChange={(value) => setSelectedLocation(value)}
      >
        <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0">
          <SelectValue placeholder="Event Location"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Location</SelectLabel>
            {uniqueLocations.map((location, index) => (
              <SelectItem
                key={index}
                value={location === "All locations" ? null : location}
              >
                {location}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventLocation;
