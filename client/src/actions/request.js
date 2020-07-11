import axios from 'axios'

export const LOAD_REQUESTS = 'LOAD_REQUESTS'
export const SET_REQUESTS = 'SET_REQUESTS'

const loadRequests = () => ({
    type: LOAD_REQUESTS,
})

const setRequests = data => ({
    type: SET_REQUESTS,
    data,
})

export function getRequests(force = false) {
    return async (dispatch, getState) => {
        const { requests } = getState()
        if (!force && requests.loaded) return

        dispatch(loadRequests())

        try {
            const res = await axios.get('http://localhost:8080/requests')
            return dispatch(setRequests(res.data.data))
        } catch (err) {
            console.log(err)
        }
    }
}

export function addRequest(request) {
    return async dispatch => {
        try {
            await axios.post('http://localhost:8080/request', request)
            return dispatch(getRequests(true))
        } catch (err) {
            console.log(err)
        }
    }
}

export function deleteRequest(id) {
    return async dispatch => {
        try {
            await axios.delete(`http://localhost:8080/request/${id}`)
            return dispatch(getRequests(true))
        } catch (err) {
            console.log(err)
        }
    }
}
