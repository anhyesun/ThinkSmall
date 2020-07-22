import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import LoadingIndicator from './LoadingIndicator'
import classes from '../../../modules/form.module.css'

const Autocomplete = ({ value, onChange, onSelect }) => {
    const Suggestions = ({ loading, suggestions, getSuggestionItemProps }) => (
        <div className={['autocomplete-dropdown-container', classes.suggestions]}>
            {loading
                ? <LoadingIndicator />
                : suggestions.map(suggestion => {
                    const className = suggestion.active
                        ? classes.active
                        : classes.inactive
                    return (
                        <div {...getSuggestionItemProps(suggestion, { className })}>
                            <span>{suggestion.description}</span>
                        </div>
                    )
                })}
        </div>
    )
    const PlacesInput = ({ getInputProps, ...props }) => (
        <div>
            <input
                {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                })}
                className={classes.input}
            />
            {value && <Suggestions {...props} />}
        </div>
    )
    return (
        <PlacesAutocomplete {...{ value, onChange, onSelect }}>
            {PlacesInput}
        </PlacesAutocomplete>
    )
}

export default Autocomplete
