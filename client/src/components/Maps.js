import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
    GoogleMap, withGoogleMap, Marker, InfoWindow,
} from 'react-google-maps'
import { useGeolocation } from 'react-use'
import { LoadingIndicator } from './Form/components'
import { getBusinesses } from '../actions'
import classes from '../modules/maps.module.css'

function Maps({ loading, businesses }) {
    const geo = useGeolocation()
    useEffect(() => {
        async function loadBusinesses() {
            await getBusinesses()
        }
        loadBusinesses()
    }, [])

    const Map = () => {
        const [selectedBusiness, setSelectedBusiness] = useState(null)

        const Markers = () => (
            <div>
                {businesses.map(business => {
                    const { requests = [] } = business
                    const icon = requests.length > 0 ? 'meteor' : 'check'
                    const background = requests.length > 0 ? 'F22613' : '4DAF7C'
                    return (
                        <Marker
                            key={business._id}
                            icon={`https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?icon=fa-${icon}&background=${background}&size=36`}
                            position={{ lat: business.lat, lng: business.lng }}
                            onClick={() => setSelectedBusiness(business)}
                        />
                    )
                })}
            </div>
        )

        const InfoWindows = () => (
            <div>
                {selectedBusiness && (
                    <InfoWindow
                        position={{ lat: selectedBusiness.lat, lng: selectedBusiness.lng }}
                        onCloseClick={() => { setSelectedBusiness(null) }}
                    >
                        <div className={classes.root}>
                            <h3>{selectedBusiness.storeName}</h3>
                            <h4>
                                Address:&nbsp;
                                {selectedBusiness.location}
                            </h4>
                            <img className={classes.avatar} src={selectedBusiness.imageUrl} alt="" />
                        </div>
                    </InfoWindow>
                )}
            </div>
        )

        return (
            <GoogleMap defaultZoom={11.5} defaultCenter={{ lat: geo.latitude, lng: geo.longitude }}>
                <Markers />
                <InfoWindows />
            </GoogleMap>
        )
    }

    // must wrap the map with some more code for google maps to work
    const WrappedMap = withGoogleMap(Map)

    const DisplayMap = () => (
        <div style={{ width: '100vw', height: '100vh' }}>
            {loading || geo.loading
                ? <LoadingIndicator />
                : (
                    <WrappedMap
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                    />
                )}
        </div>
    )

    return <DisplayMap />
}

export default connect(({ businesses }) => ({
    loading: businesses.loading,
    businesses: businesses.data,
}), { getBusinesses })(Maps)
