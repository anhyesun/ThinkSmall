import { SWITCH_VIEW } from '../actions';

export default (switchState = false, action) => {
    switch (action.type) {
    case SWITCH_VIEW:
        return !switchState;
    default:
        return switchState;
    }
};
