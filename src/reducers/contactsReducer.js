import { GET_CONTACTS, SINGLE_CONTACT } from '../actions/types'

const initialState = {

};


export default (state = initialState, action) => {




    switch (action.type) {

        case GET_CONTACTS:
            return { ...state, contacts: action.payload }
        case SINGLE_CONTACT:
            return { ...state, contact: action.payload }

        default:
            return state
    }
}
