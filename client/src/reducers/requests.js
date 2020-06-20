import { SAVE_REQUEST } from '../actions';
import { defaultRequests } from '../constant';

export default (requests = defaultRequests, action) => {
    switch (action.type) {
    case SAVE_REQUEST:
        return [...requests, action.request];
    default:
        return requests;
    }
};
