import React, { useState, useEffect, use } from 'react'
import { LittleEventCard } from '../EventCards/LittleEventCard'
import supabase from '../../supabaseClient';
import { handleLocationClick } from '../../scripts/eventHandlers';

//   absolute z-30
export const EventsList = ({filter, setFilter}) => {

    /**
     * React component that displays LittleEventCard components 
     * 
     * Fetches list of events with repsective locations from Supabase db 
     * using get_events_with_location() function
     * 
     * filter represents the location user is intending to look at
     * 
     */

    const [events, setEvents] = useState([]);
    

    async function getEvents() {
        const { data, error } = await supabase.rpc('get_events_with_location', {optional_location_id: filter});
        if(error) {
            console.error("Error fetching events data:", error);
        } else {
            setEvents(data);
            console.log("Successfully fetched events data (with locations)");
        }
    }

    useEffect(() => {
        getEvents();
    }, [filter])  // Add filter as a dependency

    return (
        <>
            <div className='bg-offwhite relative flex flex-col border-black p-4 h-screen overflow-scroll w-1/3 drop-shadow-md'>
                {events.map((event, i) => (
                    <LittleEventCard key={i} event={event} />
                ))}
             
                {filter ?
                    <a className = 'absolute bottom-0 right-0 p-4' 
                    href = '#'
                    onClick={(e) => {
                        e.preventDefault();
                        handleLocationClick(setFilter, null);
                    }}>See all events</a> : null 
                }

         </div>
        </>
    )
}
