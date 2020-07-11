import axios from 'axios'

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
            const res = await axios.get('http://localhost:8080/businesses')
            return dispatch(setBusinesses(res.data.data))
        } catch (err) {
            console.log(err)
        }
    }
}

export function addBusiness(business) {
    return async dispatch => {
        try {
            await axios.post('http://localhost:8080/business', business)
            return dispatch(getBusinesses(true))
        } catch (err) {
            console.log(err)
        }
    }
}

export function deleteBusiness(id) {
    return async dispatch => {
        try {
            await axios.delete(`http://localhost:8080/business/${id}`)
            return dispatch(getBusinesses(true))
        } catch (err) {
            console.log(err)
        }
    }
}
