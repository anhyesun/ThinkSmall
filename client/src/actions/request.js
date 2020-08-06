import axios from 'axios'
import { getCurrentUser, updateUser } from './user'
import { getBusinesses } from './business'

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
            const res = await axios.get('/requests')
            return dispatch(setRequests(res.data.data))
        } catch (err) {
            console.error(err)
        }
    }
}

export function addRequest(request) {
    return async (dispatch, getState) => {
        const { currentUser } = getState()
        try {
            const res = await axios.post('/request', request)
            dispatch(getRequests(true))
            dispatch(getBusinesses(true))
            dispatch(updateUser(currentUser.data._id, { $push: { requests: res.data.request } }))
            dispatch(getCurrentUser())
        } catch (err) {
            console.error(err)
        }
    }
}

export function deleteRequest(id) {
    return async (dispatch, getState) => {
        try {
            await axios.delete(`/request/${id}`)
            dispatch(getRequests(true))
            dispatch(getBusinesses(true))
            dispatch(getCurrentUser())
        } catch (err) {
            console.error(err)
        }
    }
}

export function updateRequest(id, body) {
    return async (dispatch, getState) => {
        try {
            await axios.put(`/request/${id}`, body)
            dispatch(getRequests(true))
            dispatch(getBusinesses(true))
            dispatch(getCurrentUser())
        } catch (err) {
            console.error(err)
        }
    }
}
