import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    DialogTitle as Title,
    TextareaAutosize as Textarea,
} from '@material-ui/core';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import {
    Actions,
    Content,
    ContentText,
    Input,
    Text,
} from './components';
import Tags from '../Tags/Tags';
import loader from '../../assets/loader.svg';
import classes from '../../modules/form.module.css';

const styles = {
    active: {
        backgroundColor: '#fafafa',
        cursor: 'pointer',
        padding: '7.5px 10px',
        fontSize: 'small',
        borderRadius: 4,
    },
    inactive: {
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        padding: '7.5px 10px',
        fontSize: 'small',
        borderRadius: 4,
    },
};

const Suggestions = ({ loading, suggestions, getSuggestionItemProps }) => (
    <div className={['autocomplete-dropdown-container', classes.suggestions]}>
        {loading
            ? <LoadingIndicator />
            : suggestions.map(suggestion => {
                const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                const style = suggestion.active
                    ? styles.active
                    : styles.inactive;
                return (
                    <div
                        {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                        })}
                    >
                        <span>{suggestion.description}</span>
                    </div>
                );
            })}
    </div>
);

const LoadingIndicator = () => (
    <div style={{ padding: 50 }}>
        <img id="loading" src={loader} />
        <p style={{ textAlign: 'center', fontSize: 'small' }}>Loading...</p>
    </div>
);

const Form = ({ open, handleClose }) => {
    const [address, setAddress] = useState('');
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .then(() => setAddress(address))
            .catch(error => console.error('Error', error));
    };

    const PlacesInput = ({ getInputProps, ...props }) => (
        <div>
            <input
                {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                })}
                className={classes.input}
            />
            {address && <Suggestions {...props} />}
        </div>
    );

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="request-form"
        >
            <Title id="request-form" disableTypography>File a new request</Title>
            <Content>
                <ContentText>
                    To help us best understand your situation,
                    please provide details and type of help required of your business.
                </ContentText>
                <Text>Name of Business</Text>
                <Input autoFocus margin="dense" fullWidth placeholder="e.g. Hunter & Hare" />
                <Text>Location</Text>
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                    {PlacesInput}
                </PlacesAutocomplete>
                <Text>Description of Business</Text>
                <Textarea className={classes.textarea} aria-label="description" rowsMin={5} />
                <Text>Request Details</Text>
                <Tags canAdd />
                <Textarea className={classes.textarea} aria-label="details" rowsMin={5} />
            </Content>
            <Actions>
                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                <Button variant="outlined" onClick={handleClose}>Submit</Button>
            </Actions>
        </Dialog>
    );
};

export default Form;
