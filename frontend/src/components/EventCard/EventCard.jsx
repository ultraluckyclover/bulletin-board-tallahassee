import React from 'react'

export const EventCard = ({event}) => {
  console.log("IN EVENT CARD")
  console.log(event)
  return (
    <div className = 'card border-b-2 border-black p-2'>
        <h2 class = 'text-lg font-bold'>{event.eventName}</h2>
        <p class = 'font-semibold'>{event.locationName}</p>
        <p>Date: {event.dateTime[0]}</p>
        <p>Time: {event.dateTime[1]}</p>
    </div>
  )
}
