import React from 'react';
import Button from '@material-ui/core/Button';
import classes from '../../../modules/nav.module.css';

const ButtonNavBar = ({ userType, handleOpen }) => {
    const options = {
        business: [
            { title: 'Request Help', action: handleOpen },
            { title: 'Register Store' },
        ],
        volunteer: [
            { title: 'Provide Help' },
            { title: 'Register User' },
        ],
    };
    return (
        <div className={classes.flex}>
            {options[userType].map(({ title, action }) => (
                <Button
                    key={title}
                    className={classes.button}
                    variant="outlined"
                    onClick={action}
                >
                    {title}
                </Button>
            ))}
        </div>
    );
};

export default ButtonNavBar;
