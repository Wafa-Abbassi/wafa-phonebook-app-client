import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Authenticated from '../../misc/auth/Authenticated'
import Navbar from '../../navigation/NavBar'
import { Switch, Route } from 'react-router-dom'
import Contacts from '../Contacts/Contacts'
import Create from '../Contacts/Create'
import { createContact, getContacts } from '../../../actions/contactsActions'
import { isEmpty } from '../../../utils/isEmpty'
import Single from '../SingleContact'

class DashBoard extends Component {



    componentDidMount() {
        this.props.getContacts({}, 1)
    }





    render() {

        const { user } = this.props;



        const renderUser = () => {

            if (this.props.user) {

                return (<div className=" card my-2 py-2 container">


                    <div className="d-flex h-100 justify-content-center align-items-center my-2 py-2">

                        <span className="mx-2 px-2 display-5">
                            Your Number :
                            </span>
                        <span className="mx-2 px-2 display-5" >
                            {this.props.user.isAuth ? this.props.user.user.phone.email : 'no email'}
                        </span>
                    </div>


                </div>)

            } else {
                return (
                    <div>Loading</div>
                )
            }




        }


        const renderDashboard = () => {


            const { user } = this.props;


            console.log(user)
            return (
                <Fragment>

                    <div>
                        <Navbar />


                        {renderUser()}


                        <div>

                            <Switch>
                                <Route exact path="/dashboard" render={() => <Contacts getContacts={this.props.getContacts} />} />
                                <Route path="/dashboard/create" render={() => <Create createContact={this.props.createContact} />} />

                            </Switch>

                        </div>
                    </div>

                </Fragment>
            )






        }






        return (
            <div>
                {renderDashboard()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    async: state.async,


})

const mapDispatchToProps = {
    createContact,
    getContacts

}


export default connect(mapStateToProps, mapDispatchToProps)(Authenticated(DashBoard));