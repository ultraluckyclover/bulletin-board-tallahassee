import React from 'react'
import { EventCard } from '../EventCard/EventCard'


const events = [
    {
        locationName: "The Bark",
        lat: 30.43391530894842,
        long: -84.28893872023866,
        eventName: "Rock concert" ,
        dateTime: ["2025-1-1", '22:00']
    },
    {
        locationName: "Common Grounds",
        lat: 30.43391530894842,
        long: -84.28893872023866,
        eventName: "Spoken Word Poetry Night" ,
        dateTime: ["2025-1-9", "18:00"]
    },
    {
        locationName: "926 Bar & Grill",
        lat: 30.43391530894842,
        long: -84.28893872023866,
        eventName: "Brunch" ,
        dateTime: ["2025-1-8", "10:00"]
    },
    {
        locationName: "Cascades Park",
        lat: 30.43391530894842,
        long: -84.28893872023866,
        eventName: "T-Pain Concert" ,
        dateTime: ["2025-8-30", "20:00"]
    },
    {
        locationName: "The Bark",
        lat: 30.43391530894842,
        long: -84.28893872023866,
        eventName: "Rock concert" ,
        dateTime: ["2025-1-1", '22:00']
    },
    {
        locationName: "Common Grounds",
        lat: 30.43391530894842,
        long: -84.28893872023866,
        eventName: "Spoken Word Poetry Night" ,
        dateTime: ["2025-1-9", "18:00"]
    },
    {
        locationName: "926 Bar & Grill",
        lat: 30.43391530894842,
        long: -84.28893872023866,
        eventName: "Brunch" ,
        dateTime: ["2025-1-8", "10:00"]
    },
    {
        locationName: "Cascades Park",
        lat: 30.43391530894842,
        long: -84.28893872023866,
        eventName: "T-Pain Concert" ,
        dateTime: ["2025-8-30", "20:00"]
    }
  ]
//   absolute z-30
export const EventsList = () => {
  return (
    <>
        <div class = ' bg-white flex flex-col border-4 border-black p-4 h-screen overflow-scroll w-1/3'>
            {events.map( (event, i) => {
            return <EventCard key={i} event = {event} />;
            })}
        </div>
    </>
  )
}
