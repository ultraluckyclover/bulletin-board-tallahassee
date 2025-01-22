import React from 'react'
import { formatTimestamp } from '../../utils'

export const EventCard = ({event}) => {
  return (
    <div className = 'card border-b-[1px] border-gray-300 p-2'>
        <h2 className = 'text-lg font-bold'>{event.event_name}</h2>
        <p className = 'font-semibold'>{event.location_name}</p>
        <p>{formatTimestamp(event.start_time)}</p>
    </div>
  )
}
