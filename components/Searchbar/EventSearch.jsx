import React, { useContext } from "react";
import { Input } from "../ui/input";
import { EventContext } from "@/context/EventContext";
import { BiSearch } from "react-icons/bi";

const EventSearch = () => {
  const { searchTerm, setSearchTerm } = useContext(EventContext);
  console.log(searchTerm);
  return (
    <div className="flex items-center gap-[10px] w-full xl:w-[190px]">
      <div className="text-lg text-accent">
        <BiSearch />
      </div>
      <Input
        value={searchTerm}
        type="text"
        placeholder="Event name or artist"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-transparent p-0 border-0 focus-visible:ring-0 focue-visible:ring-offset-0"
      />  
    </div>
  );
};

export default EventSearch;
