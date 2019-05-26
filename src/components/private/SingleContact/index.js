
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { redirectSingleContact, deleteContact } from '../../../actions/contactsActions'
import NavBar from '../../navigation/NavBar';
import { Link } from 'react-router-dom'
import moment from 'moment'





class index extends Component {





    // componentWillUnmount = () => {

    //     this.props.redirectSingleContact(null, '/dashboard')

    // }

    renderContent = () => {


        if (this.props.contact) {


            return (
                <div className="card border-success">
                    <div className="card-header">

                        <div className="float-right">

                            <Link to="/dashboard/create" style={{ cursor: 'pointer' }}>
                                <i
                                    class="fas fa-edit mx-4"
                                    style={{ fontSize: '18px' }}


                                >


                                </i>
                            </Link>

                            <i
                                class="far fa-trash-alt mx-4"
                                style={{ cursor: 'pointer', fontSize: '18px' }}
                                onClick={() => { this.props.deleteContact(this.props.contact._id) }}
                            >

                            </i>

                        </div>
                        <div className="float-left">

                            <h4>
                                {this.props.contact.name}
                                {' '}
                                {this.props.contact.lastname}
                            </h4>

                        </div>


                    </div>

                    <div className="card-body">

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Description :  {this.props.contact.description || ''}</li>
                            <li class="list-group-item">Company :  {this.props.contact.company || ''}</li>
                            <li class="list-group-item">Address :  {this.props.contact.address || ''}</li>
                            <li class="list-group-item">Twitter :  {this.props.contact.twitter || ''}</li>

                        </ul>



                    </div>
                    <div className="card-footer">

                        created   {moment(this.props.contact.createdAt).fromNow()}
                    </div>
                </div>
            )


        } else {


            return <div>
                <h4>Loading.</h4>
            </div>
        }

    }


    render() {





        return (

            <div className="">

                <NavBar />
                <div className="container my-2 py-2">

                    {this.renderContent()}
                </div>

            </div>

        )
    }
}


const mapStateToProps = (state) => ({
    contact: state.contacts.contact ? state.contacts.contact : null
})

const mapDispatchToProps = {
    redirectSingleContact,
    deleteContact
}



export default connect(mapStateToProps, mapDispatchToProps)(index);