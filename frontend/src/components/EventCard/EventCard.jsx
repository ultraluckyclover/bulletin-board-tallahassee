import React from 'react'

export const EventCard = ({event}) => {
  return (
    <div className = 'card border-b-2 border-black p-2'>
        <h2 className = 'text-lg font-bold'>{event.event_name}</h2>
        {/* <p className = 'font-semibold'>{event.locationName}</p> */}
        <p>Date: {event.start_time}</p>
    </div>
  )
}
ç