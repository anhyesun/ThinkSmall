import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Possible to refactor code if time permits

function ButtonNavBar({ userType, handleOpen, style }) {
    if (userType === 'Business') {
        return (
            <div className={style.flexStyle}>
                <Button variant="outlined" className={style.rightStyle} onClick={handleOpen}>
                    Request Help
                </Button>
                <Box mr=".5rem" />
                <Button variant="outlined" className={style.rightStyle}>
                    Register Store
                </Button>
            </div>
        );
    } if (userType === 'Volunteer') {
        return (
            <div className={style.flexStyle}>
                <Button variant="outlined" className={style.rightStyle}>
                    Provide Help
                </Button>
                <Box mr=".5rem" />
                <Button variant="outlined" className={style.rightStyle}>
                    Register User
                </Button>
            </div>
        );
    }
}

export default ButtonNavBar;
