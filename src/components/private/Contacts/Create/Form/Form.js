
import React, { Component } from 'react'
import index from '../../Lists';
import TextInput from '../../../../misc/forms/inputs/TextInput'
import TextArea from '../../../../misc/forms/inputs/TextArea'

import { reduxForm, Field } from 'redux-form'
import Photos from '../Photos/Photos'


const validate = values => {
    const errors = {}
    if (!values.number) {
        errors.number = 'Number Required'
    }
    if (!values.name) {
        errors.name = 'Name Required'
    }
    if (!values.lastname) {
        errors.lastname = 'Last Name Required'
    }
    if (!values.company) {
        errors.company = ' Company Required'
    }


    return errors
}


class Form extends Component {


    // componentWillUnmount = () => {
    //     this.props.clearForm('SINGLE_CONTACT')
    // }


    render() {

        const { handleSubmit, submitCallback } = this.props;


        return (
            <form
                className="container my-2 py-2 text-center"
                onSubmit={handleSubmit(submitCallback)}

            >


                <div className="row my-2 py-2">

                    <div className="col-md-6 col-sm-12">

                        <Field
                            component={TextInput}
                            name="number"
                            type="number"
                            placeholder="enter phone number"
                        />

                    </div>
                    <div className="col-md-6 col-sm-12">

                        <Field
                            component={TextArea}
                            name="description"
                            type="text"
                            placeholder="enter description"
                        />

                    </div>

                </div>   <div className="row my-2 py-2">

                    <div className="col-md-6 col-sm-12">

                        <Field
                            component={TextInput}
                            name="name"
                            type="text"
                            placeholder="enter firstname"
                        />

                    </div>
                    <div className="col-md-6 col-sm-12">

                        <Field
                            component={TextInput}
                            name="lastname"
                            type="text"
                            placeholder="enter lastname"
                        />

                    </div>

                </div>

                <div className="row my-2 py-2">

                    <div className="col-md-6 col-sm-12">

                        <Field
                            component={TextInput}
                            name="company"
                            type="text"
                            placeholder="enter company name"
                        />

                    </div>
                    <div className="col-md-6 col-sm-12">

                        <Field
                            component={TextInput}
                            name="twitter"
                            type="text"
                            placeholder=" enter twitter link "
                        />

                    </div>

                </div>
                <div className="row">

                    <div className=" col-md-12 col-sm-12">
                        <Field
                            component={TextArea}
                            name="address"
                            type="text"
                            placeholder="enter address"
                        />
                    </div>


                </div>

                <div>
                    <Field
                        component={Photos}
                        name="images"
                        initialImages={this.props.intitialValues ? this.props.intitialValues.images : []}

                    />

                </div>



                <button className="btn" type="submit"
                    style={{
                        backgroundColor: `#D09E88`,
                        color: '#fff'

                    }}
                >

                    {this.props.initialValues ? 'Edit Contact' : 'Add Contact'}
                </button>

            </form>
        )
    }
}



export default reduxForm({
    form: 'create-contact',
    validate: validate
})(Form);