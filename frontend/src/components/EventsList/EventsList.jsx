import React, { useState, useEffect } from 'react'
import { EventCard } from '../EventCard/EventCard'
import supabase from '../../supabaseClient';


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

    const [events, setEvents] = useState([]);

    async function getEvents() {
        const { data, error } = await supabase.from('events').select();
        if (error) {
            console.error("Error fetching events data:", error);
        } else {
            setEvents(data);
            console.log("Successfully fetched events data.");
        }
    }

    useEffect(() => {
        getEvents();
    }, [])
    console.log("Events:", events);



  return (
    <>
        <div className = ' bg-[#fffcf5] flex flex-col border-4 border-black p-4 h-screen overflow-scroll w-1/3'>
            {events.map( (event, i) => {
            return <EventCard key={i} event = {event} />;
            })}
        </div>
    </>
  )
}
