import { OPEN_FORM, CLOSE_FORM } from '../actions';

export default (forms = {}, action) => {
    switch (action.type) {
    case OPEN_FORM:
        return { ...forms, [action.id]: true };
    case CLOSE_FORM:
        return { ...forms, [action.id]: false };
    default:
        return forms;
    }
};
