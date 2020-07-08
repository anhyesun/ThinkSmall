import { LOAD_REQUESTS, SET_REQUESTS } from '../../actions'

const defaultRequests = {
    loading: true,
    loaded: false,
    data: [],
}

export default (requests = defaultRequests, action) => {
    switch (action.type) {
    case LOAD_REQUESTS: {
        return {
            ...requests,
            loading: true,
            loaded: false,
        }
    }
    case SET_REQUESTS: {
        return {
            ...requests,
            loading: false,
            loaded: true,
            data: action.data,
        }
    }
    default:
        return requests
    }
}
