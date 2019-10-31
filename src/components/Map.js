import React, { useState, useEffect } from 'reactn';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import useLocation from "../hooks/UseLocation";

const TOKEN =  "pk.eyJ1IjoibWFoYWRpLW5zdSIsImEiOiJjazI3Nmt1aWgwczNoM21reGgzZzhtNGJiIn0.vxdLJWEwFqL_w5nPmtIthg";

const Map = () => {
    const location = useLocation();
    const [viewport, setViewport] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 31.9742044,
      longitude: -49.25875,
      zoom: 2,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setViewport({
          ...viewport,
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
  
    useEffect(() => {
      if (location) {
        setViewport((vp) => ({
          ...vp,
          ...location,
          zoom: 8,
        }));
      }
    }, [location, setViewport]);

     const addData = () =>{
       console.log("clicked");
    }
  
    return (
       
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={TOKEN}
          {...viewport}
          onViewportChange={(vp) => setViewport(vp)}
        >
          {location ? (
            <Marker
              latitude={location.latitude}
              longitude={location.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >    
              <span style={{ fontSize: `${viewport.zoom * 0.5}rem` }}
               onClick = {addData}
              >📸</span>
            </Marker>
          ) : null}
        </ReactMapGL>
    );
  };
  
  export default Map;