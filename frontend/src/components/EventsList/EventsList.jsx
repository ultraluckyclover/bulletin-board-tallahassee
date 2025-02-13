import React, { useState, useEffect, use, useContext } from 'react'
import { LittleEventCard } from '../EventCards/LittleEventCard'
import supabase from '../../supabaseClient';
import { handleLocationClick } from '../../scripts/eventHandlers';
import { useEvents } from '../../scripts/Context';

//   absolute z-30
export const EventsList = () => {

    /**
     * React component that displays LittleEventCard components 
     * 
     * Fetches list of events with repsective locations from Supabase db 
     * using get_events_with_location() function from Supabase db
     * 
     */


    const { events, setLocationId, locationId } = useEvents();

    return (
        <>
            <div className='bg-offwhite relative flex flex-col border-black p-4 h-screen overflow-scroll w-1/3 drop-shadow-md'>
                {events?.map((event, i) => (
                    <LittleEventCard key={i} event={event} />
                ))}
             
                {locationId ?
                    <a className = 'absolute bottom-0 right-0 p-4' 
                    href = '#'
                    onClick={(e) => {
                        e.preventDefault();
                        handleLocationClick(setLocationId, null);
                    }}>See all events</a> : null 
                }

         </div>
        </>
    )
}
