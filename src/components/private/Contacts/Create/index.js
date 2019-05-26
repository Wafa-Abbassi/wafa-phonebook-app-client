
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form/Form'
import { clearForm, editContact } from '../../../../actions/contactsActions'

class index extends Component {



    submitHandler = (data) => {



        if (this.props.contact) {

            this.props.editContact(this.props.contact._id, data)

        } else {
            this.props.createContact(data)


        }



    }




    render() {




        return (
            <div className="container">
                <h4 className="text-center display-4 my-1 py-1">Create A Contact</h4>

                <Form
                    submitCallback={this.submitHandler}
                    initialValues={this.props.contact}
                    clearForm={this.props.clearForm}

                />



            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    contact: state.contacts.contact ? state.contacts.contact : null
})

const mapDispatchToProps = {
    clearForm,
    editContact
}


export default connect(mapStateToProps, mapDispatchToProps)(index);