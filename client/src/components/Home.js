import React from 'react';
import { Link } from 'react-router-dom';
import src from '../assets/hug.jpg';
import Form from './Form/Form';
import classes from '../modules/home.module.css';

const Square = ({ title, subtitle, to }) => (
    <Link to={to}>
        <div className={classes.square}>
            <div>
                <img src={src} className={classes.img} alt={title} />
                <h3>{title}</h3>
                <p style={{ fontSize: 'small' }}>{subtitle}</p>
            </div>
        </div>
    </Link>
);

const Home = () => (
    <div className={classes.root}>
        <h1 className={classes.header}>Are you...</h1>
        <div className={classes.container}>
            <Square
                title="Business Owner"
                subtitle="We need a nice logo for our website!"
                to="/businesses"
            />
            <Square
                title="Volunteer"
                subtitle="Looking to get involved in the community!"
                to="/volunteers"
            />
        </div>
        <Form />
    </div>
);

export default Home;
