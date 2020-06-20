import React, { useState } from 'react';
import {
    GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow,
} from 'react-google-maps';
import { defaultBusinesses as businesses } from '../constant';
import classes from '../modules/maps.module.css';

function Map() {
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const Markers = () => (
        <div>
            {businesses.map(business => (business.needsHelp
                && (
                    <Marker
                        key={business.id}
                        position={{ lat: business.lat, lng: business.lng }}
                        onClick={() => {
                            setSelectedBusiness(business);
                        }}
                    />
                )))}
        </div>
    );

    const InfoWindows = () => (
        <div>
            {selectedBusiness && (
                <InfoWindow
                    position={{ lat: selectedBusiness.lat, lng: selectedBusiness.lng }}
                    onCloseClick={() => { setSelectedBusiness(null); }}
                >
                    <div className={classes.root}>
                        <h3>{selectedBusiness.storeName}</h3>
                        <h4>
                            Address:&nbsp;
                            {selectedBusiness.streetAddress}
                        </h4>
                        <img className={classes.avatar} src={selectedBusiness.avatar} alt="" />
                    </div>
                </InfoWindow>
            )}
        </div>
    );

    return (
        <GoogleMap
            defaultZoom={11.5}
            defaultCenter={{ lat: 49.282730, lng: -123.120735 }}
        >
            <Markers />
            <InfoWindows />
        </GoogleMap>
    );
}

// must wrap the map with some more code for google maps to work
const WrappedMap = withScriptjs(withGoogleMap(Map));
const API_KEY = process.env.REACT_APP_API_KEY;
// {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
// ask about witch and why display map cant be componentized

function Maps() {
    const DisplayMap = () => (
        <div style={{ width: '100vw', height: '100vh' }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    );

    return <DisplayMap />;
}

export default Maps;
