import { EventContext } from '@/context/EventContext'
import React, { useContext } from 'react'
import Event from './Event'
import SkeletonGrid from '../SkeletonGrid'

const EventList = () => {
  const {isLoading,error,filterEvents} = useContext(EventContext)
  if(error) return <div>Error: {error}</div>
  if(filterEvents.length === 0 && !isLoading){
    return <div>No events available</div>
  }
  if(isLoading){
    return <SkeletonGrid itemCount={12}/>
  }else{
    return (
      <div>
        {
          filterEvents.map((event,index)=>{
            return(
              <div key={index}>
                <Event event={event}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default EventList
