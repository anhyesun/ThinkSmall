import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import src from '../assets/hug.svg';

const useStyles = matches => makeStyles({
    header: {
        fontFamily: '\'PT Serif Caption\', serif',
        textAlign: 'center',
    },
    container: {
        display: matches ? 'flex' : 'block',
        margin: 'auto',
        width: matches ? 926 : 'fit-content',
    },
    square: {
        background: '#0f2c70',
        borderRadius: 7.5,
        color: '#fbebe3',
        display: 'flex',
        flexDirection: 'column-reverse',
        height: 340,
        margin: '30px auto',
        padding: '10px 10px 50px',
        textAlign: 'center',
        width: matches ? 380 : 280,
    },
    img: {
        background: '#fbebe3',
        borderRadius: '50%',
        objectFit: 'cover',
        height: matches ? 300 : 200,
        width: matches ? 300 : 200,
    },
});

const Square = ({
    title, subtitle, to,
}) => {
    const matches = useMediaQuery('(min-width:926px)');
    const classes = useStyles(matches)();
    return (
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
};

const Home = () => {
    const matches = useMediaQuery('(min-width:926px)');
    const classes = useStyles(matches)();
    return (
        <>
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
        </>
    );
};

export default Home;
