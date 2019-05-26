
import { GET_CONTACTS, SINGLE_CONTACT } from './types'
import authService from '../services/authService'
import axiosService from '../services/axiosService'
import { asyncActionStart, asyncActionFinish, asyncActionError } from './asyncActions'
import { toastr } from 'react-redux-toastr'
import { push } from 'connected-react-router'
import axios from 'axios'
import { endpoint, prodEndpoint } from '../config'
import { reset } from 'redux-form'
const URL = process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint
const axiosInstance = axiosService.getInstance();



export const clearForm = (actionType) => {





    return (dispatch) => {
        dispatch({
            type: actionType,
            payload: null
        })
    }

}




export const editContact = (contactId, data) => {



    return (dispatch) => {


        axiosInstance.post(`/contacts/edit`, { contactId, data })
            .then((response) => {

                dispatch(getContacts({}, 1))
                toastr.info('edited')
                dispatch(push('/dashboard'))


            })

            .catch((err) => {
                console.log(err);
            })



    }



}
export const deleteContact = (id) => {


    return (dispatch) => {


        axiosInstance.post(`/contacts/delete`, { contactId: id })
            .then((response) => {

                dispatch(getContacts({}, 1))
                toastr.info('delete')
                dispatch(push('/dashboard'))


            })

            .catch((err) => {
                console.log(err);
            })



    }

}

export const redirectSingleContact = (contact, location) => {


    return (dispatch) => {

        dispatch({
            type: SINGLE_CONTACT,
            payload: contact
        })

        dispatch(push(location))

    }



}

export const getContacts = (filters = {}, page) => {


    return (dispatch) => {


        axiosInstance.post(`/contacts/all`, { filters, page })
            .then((response) => {

                toastr.info('loading contacts')
                dispatch({
                    type: GET_CONTACTS,
                    payload: response.data
                })



            })

            .catch((err) => {
                console.log(err);
            })



    }

}

export const createContact = (data) => {


    return (dispatch) => {


        axiosInstance.post(`/contacts/create`, data)
            .then((response) => {

                toastr.success('contact created')
                dispatch(getContacts())
                dispatch(push('/dashboard'))

            })

            .catch((err) => {
                console.log(err);
            })



    }


}

export const deleteOriginalImg = (imageId, contactId) => {



    return (dispatch) => {


        axiosInstance.post(`/contacts/upload/${contactId}/${imageId}`)
            .then((response) => {


                dispatch({

                })

            })

            .catch((err) => {
                console.log(err);
            })



    }


}

export const sendImages = (blobs, callback) => {


    return (dispatch) => {
        const formData = new FormData()
        for (let i = 0; i < blobs.length; i++) {

            formData.append(`file${i}`, blobs[i])

        }

        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }


        axiosInstance.post(`/contacts/upload`, formData)
            .then((response) => {

                callback(response.data)



            })








    }




}