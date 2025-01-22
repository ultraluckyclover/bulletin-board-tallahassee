# Tallahassee Event Bulletin Board

A dynamic bulletin board application for Tallahassee where users can view local events on a map. Built with React for the front end, Leaflet.js for interactive map rendering, and Supabase for back-end services and data management.

### Tech Stack:
 * Front-end: React.js
 * Mapping: Leaflet.js
 * Database: Supabase (PostgreSQL)
 * Styling: TailwindCSS

### Prerequisites
* npm (10.9.x recommended)
* Supabase account and project

## Installation

1. Clone the project

```
https://github.com/ultraluckyclover/bulletin-board-tallahassee.git
```
2. Navigate into the frontend directory and install packages.
```
cd frontend
npm install
```

4. Create a .env file in the frontend directory and add the following variables:
```
REACT_APP_SUPABASE_URL = <your-supabase-url>
REACT_APP_SUPABASE_KEY = <your-supabase-anon-key>
```

## Database Schema

Run the following scripts in the Supabase SQL Editor to create tables.

### Locations table

<sub>sql</sub>
```

CREATE TABLE locations (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now(),
    lat DECIMAL(8,5) NOT NULL,
    long DECIMAL(8,5) NOT NULL,
    street_address TEXT,
    location_name TEXT NOT NULL,
    
    -- Add constraints for valid latitude/longitude
    CONSTRAINT valid_latitude CHECK (lat BETWEEN -90 AND 90),
    CONSTRAINT valid_longitude CHECK (long BETWEEN -180 AND 180)
);
```

### Events table

<sub>sql</sub>
```
CREATE TABLE events (
    id INTEGER PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now(),
    event_name TEXT NOT NULL,
    start_time TIMESTAMPTZ NOT NULL,
    type TEXT[], -- Using PostgreSQL array type for event types
    location_id INTEGER REFERENCES locations(id),
    end_time TIMESTAMPTZ
);
```
## Map Integration

To configure this for your city

1. Navigate to the Map.jsx located in frontend > src > components > Map
2. Change the values in the coords array located above the function Map declaration.

## Usage

1. Run the development server.
```
npm run start
```

2. Access the application at http://localhost:3000.







