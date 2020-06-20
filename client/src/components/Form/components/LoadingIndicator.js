import React from 'react';
import loader from '../../../assets/loader.svg';

const LoadingIndicator = () => (
    <div style={{ padding: 50 }}>
        <img id="loading" src={loader} />
        <p style={{ textAlign: 'center', fontSize: 'small' }}>Loading...</p>
    </div>
);

export default LoadingIndicator;
