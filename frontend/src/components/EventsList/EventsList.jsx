import React, { useState, useEffect, use } from 'react'
import { EventCard } from '../EventCard/EventCard'
import supabase from '../../supabaseClient';

//   absolute z-30
export const EventsList = () => {

    const [events, setEvents] = useState([]);

    async function getEvents() {
        const { data, error } = await supabase.rpc('get_events_with_location');
        if (error) {
            console.error("Error fetching events data:", error);
        } else {
            setEvents(data);
            console.log("Successfully fetched events data (with locations)");
        }
    }

    useEffect(()=>{
        getEvents();
    }, [])

  return (
    <>
        <div className = ' bg-[#fffcf5] flex flex-col border-black p-4 h-screen overflow-scroll w-1/3 drop-shadow-md'>
            {events.map( (event, i) => {
            return <EventCard key={i} event = {event} />;
            })}
        </div>
    </>
  )
}
