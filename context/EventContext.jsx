"use client";
import React, { createContext, useEffect, useState, useMemo } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showEventList, setShowEventList] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedType,setSelectedType] = useState("")

  // applied filter after submit
  const [appliedFilter, setAppliedFilter] = useState({
    searchTerm: "",
    selectedLocation: "",
    selectedDate: null,
    selectedType
  });

  // filter events based on the applied filter
  const filterEvents = useMemo(() => {
    const today = new Date();
    // console.log(today);
    return events.filter((event) => {
      // check event date (exclude past events)
      const eventDate = new Date(event.date);
      // console.log(eventDate);
      if (eventDate < today) return false;
      // check search item
      const matchesSearch = appliedFilter.searchTerm
        ? event.title
            .toLowerCase()
            .includes(appliedFilter.searchTerm.toLowerCase())
        : true;
      //check location
      const matchesLocations = appliedFilter.selectedLocation
        ? event.location
            .toLowerCase()
            .includes(appliedFilter.selectedLocation.toLowerCase())
        : true;
      // check date
      const matchesDate = appliedFilter.selectedDate? eventDate.toDateString() == new Date(appliedFilter.selectedDate).toDateString() : true;

      //check type
      const matchesType = appliedFilter.selectedType? event.type.toLowerCase() === appliedFilter.selectedType.toLowerCase() : true 

      // console.log(matchesDate);

      return matchesSearch && matchesLocations && matchesDate && matchesType;
    });
  }, [events, appliedFilter]);

  // console.log(filterEvents);

  // fetch event
  useEffect(() => {
    const fetchEvents = async () => {
      // start loading
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:4000/events");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    setShowEventList(true);
    setAppliedFilter({ searchTerm, selectedLocation, selectedDate ,selectedType});
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setShowEventList(false);
    setSelectedLocation("");
    setSelectedDate(null);
    setSelectedType("")
  };

  const formatDate = (dateString) =>{
    const date = new Date(dateString)
    const options = {weekday: "short", month: "short", day: "numeric"}
    return date.toLocaleDateString("en-US", options)
  }
  return (
    <EventContext.Provider
      value={{
        events,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        filterEvents,
        handleSubmit,
        handleClearSearch,
        showEventList,
        selectedLocation,
        setSelectedLocation,
        selectedDate,
        setSelectedDate,
        selectedType,
        setSelectedType,
        formatDate
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
