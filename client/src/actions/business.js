import axios from 'axios'
import { getCurrentUser, updateUser } from './user'

export const LOAD_BUSINESSES = 'LOAD_BUSINESSES'
export const SET_BUSINESSES = 'SET_BUSINESSES'

const loadBusinesses = () => ({
    type: LOAD_BUSINESSES,
})

const setBusinesses = data => ({
    type: SET_BUSINESSES,
    data,
})

export function getBusinesses(force = false) {
    return async (dispatch, getState) => {
        const { businesses } = getState()
        if (!force && businesses.loaded) return

        dispatch(loadBusinesses())

        try {
            const res = await axios.get('/businesses')
            return dispatch(setBusinesses(res.data.data))
        } catch (err) {
            console.error(err)
        }
    }
}

export function addBusiness(business) {
    return async (dispatch, getState) => {
        const { currentUser } = getState()
        try {
            const res = await axios.post('/business', business)
            dispatch(getBusinesses(true))
            dispatch(updateUser(currentUser.data._id, { $push: { owns: res.data.business } }))
            dispatch(getCurrentUser())
        } catch (err) {
            console.error(err)
        }
    }
}

export function deleteBusiness(id) {
    return async (dispatch, getState) => {
        const { currentUser } = getState()
        try {
            await axios.delete(`/business/${id}`)
            dispatch(getBusinesses(true))
            dispatch(updateUser(currentUser.data._id, { $pull: { owns: { _id: id } } }))
            dispatch(getCurrentUser())
        } catch (err) {
            console.error(err)
        }
    }
}

export function updateBusiness(id, body) {
    return async (dispatch, getState) => {
        try {
            await axios.put(`/business/${id}`, body)
            dispatch(getBusinesses(true))
            dispatch(getCurrentUser())
        } catch (err) {
            console.error(err)
        }
    }
}
