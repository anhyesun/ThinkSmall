import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../modules/home.module.css';

const Square = ({ title, subtitle, background, to, src }) => (
    <Link to={to}>
        <div className={classes.square} style={{ background }}>
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
                background="#16A085"
                src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80"
            />
            <Square
                title="Volunteer"
                subtitle="Looking to get involved in the community!"
                to="/volunteers"
                background="#763568"
                src="https://images.unsplash.com/photo-1504131598085-4cca8500b677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
            />
        </div>
    </div>
);

export default Home;
