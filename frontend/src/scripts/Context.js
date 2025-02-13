import { createContext, useState, useEffect, useContext } from "react";
import supabase from "../supabaseClient";


export const EventsContext = createContext({
    events: [],
    locationId: null,
    type: '',
    setEvents: () => {},
    setLocationId: () => {},
    setType: () => {},
});

export function EventsProvider( {children} ) {

    console.log("IN THE CONTEXT");
    
    const [events, setEvents] = useState([]);

    // filters
    const [locationId, setLocationId] = useState(null);
    const [type, setType] = useState('');
    async function fetchEvents(locationId, type) {

        const params = {
            optional_location_id: locationId || null,
            optional_type: type || null 
        };

        try {
            console.log('Fetching events with:', { locationId, type }); 
            const { data, error } = await supabase.rpc('get_events_with_location', params);
            if (error) throw error;
            setEvents(data)
            console.log('Raw response from Supabase:', data);

        } catch (error) {
            console.error("Error fetching events data:", error);
            setEvents([])
        }
    }

    useEffect(() => {
        fetchEvents(locationId,type);
    }, [locationId,type]) 

    return (
        <EventsContext.Provider value = {{ events, locationId, type, setLocationId, setType }}>
            {children}
        </EventsContext.Provider>
    )

}

export const useEvents = () => useContext(EventsContext);





