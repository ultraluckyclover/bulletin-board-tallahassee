import React from 'react'
import { formatTimestamp } from '../../scripts/utils'

export const LittleEventCard = ({event}) => {
  /**
   * React component displayed inside EventsList component
   */
  return (
    <div className = 'card border-b-[1px] border-black p-2'>
        <h1 className = 'font-bold text-h1'>{event.event_name}</h1>
        <h2 className = 'font-semibold text-h2'>{event.location_name}</h2>
        <p>{formatTimestamp(event.start_time)}</p>
    </div>
  )
}
