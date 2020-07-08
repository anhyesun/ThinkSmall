import axios from 'axios'

export const LOAD_USERS = 'LOAD_USERS'
export const SET_USERS = 'SET_USERS'

const loadUsers = () => ({
    type: LOAD_USERS,
})

const setUsers = data => ({
    type: SET_USERS,
    data,
})

export function getUsers(force = false) {
    return async (dispatch, getState) => {
        const { users } = getState()
        if (!force && users.loaded) return

        dispatch(loadUsers())

        try {
            const res = await axios.get('http://localhost:8080/users')
            return dispatch(setUsers(res.data.data))
        } catch (err) {
            console.log(err)
        }
    }
}

export function addUser(user) {
    return async dispatch => {
        try {
            await axios.post('http://localhost:8080/user', user)
            return dispatch(getUsers(true))
        } catch (err) {
            console.log(err)
        }
    }
}
