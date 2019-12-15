import React, { useState, useRef } from 'react';
import ReactMapGL from "react-map-gl";

import './Map.css';

const Map = props => {
    console.log('props.center.latitude', props.center.latitude);
    console.log('props.center.longitude', props.center.longitude);
    const [viewport, setViewPort] = useState({
        latitude: props.center.latitude,
        longitude: props.center.longitude,
        width: "100%",
        height: "100%",
        zoom: 11
    });

    return (
        <div className={`map ${props.className}`} style={props.style}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1Ijoic2lsYXZzYWxlIiwiYSI6ImNrM3h1aWliZTEwbGgzZnQ4anZjN2dyangifQ.21mP-eCsDZW6SGtjXcVzdg"
            >
                markers here
            </ReactMapGL>
        </div>
    )
}

export default Map;