import React from 'react';
import { connect } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    DialogTitle as Title,
    TextareaAutosize as Textarea,
} from '@material-ui/core';
import {
    Actions,
    Content,
    ContentText,
    Input,
    Text,
} from './components';
import Tags from '../Tags/Tags';
import { closeForm } from '../../actions';
import classes from '../../modules/form.module.css';

const VolunteerForm = ({ open = false, closeForm }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const onClose = () => closeForm('volunteer');

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="volunteer-form"
        >
            <Title id="volunteer-form" disableTypography>Volunteer Registration Form</Title>
            <Content>
                <ContentText>
                    To help small businesses with your talent,
                    please provide your list of skill sets that you are willing to provide.
                </ContentText>
                <Text>Name of Volunteer</Text>
                <Input autoFocus margin="dense" fullWidth placeholder="" />
                <Text>List of Skillset</Text>
                <Tags canAdd />
                <Textarea className={classes.textarea} aria-label="description" rowsMin={5} />
                <Text>Portfolio or resume link</Text>
                <Input margin="dense" fullWidth placeholder="http://" />
            </Content>
            <Actions>
                <Button variant="outlined" onClick={onClose}>Cancel</Button>
                <Button variant="outlined" onClick={onClose}>Submit</Button>
            </Actions>
        </Dialog>
    );
};

const mapStateToProps = ({ forms }) => ({ open: forms.volunteer });
export default connect(mapStateToProps, { closeForm })(VolunteerForm);
