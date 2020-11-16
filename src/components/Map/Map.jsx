import React from 'react'
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap,
    Marker
} from 'react-google-maps'
import * as returnMarker from '../../data/return-marker.json'

const data = returnMarker.default

const Map = () => {
    return (
        <GoogleMap
           defaultZoom = {10}
           defaultCenter = {{ lat: -6.175110, lng : 106.865036}}
        >
        {data.map(spot=>(
            <Marker key      = {spot.SITEID + spot.dur}
                    position = {{ lat: spot.LATITUDE, lng: spot.LONGITUDE}}
            />
        ))}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
console.log(process.env.REACT_APP_GOOGLE_MAP_KEY)

const MapWrapped = () => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                process.env.REACT_APP_GOOGLE_MAP_KEY
                }`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}


export default MapWrapped