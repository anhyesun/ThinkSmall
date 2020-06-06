import React from 'react';
import Chip from '@material-ui/core/Chip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/core/styles';

const DottedChip = withStyles({
    root: {
        border: '1px dashed rgba(0, 0, 0, 0.23)',
        background: '#fafafa',
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Chip);

export default () => (
    <DottedChip
        icon={<AddCircleIcon />}
        size="small"
        label="Add a new tag"
        clickable
    />
);
