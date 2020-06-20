import { SET_CONVERSATION } from '../actions';

export default (conversation = 0, action) => {
    switch (action.type) {
    case SET_CONVERSATION:
        return action.id;
    default:
        return conversation;
    }
};
