import { EventContext } from "@/context/EventContext";
import React, { useContext } from "react";
import Event from "./Event";
import SkeletonGrid from "../SkeletonGrid";

const EventList = () => {
  const { isLoading, error, filterEvents } = useContext(EventContext);
  if (error) return <div>Error: {error}</div>;
  if (filterEvents.length === 0 && !isLoading) {
    return <div className="h-[80vh]"><p className="text-white/80 text-center">No events available</p></div>;
  }
  if (isLoading) {
    return <SkeletonGrid itemCount={12} />;
  } else {
    return (
      <div>
        <h4 className="h4 mb-6">{filterEvents.length} result found</h4>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-[30px] mb-32">
          {filterEvents.map((event, index) => {
            return (
              <div key={index}>
                <Event event={event} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default EventList;
