
import React, { Component } from 'react'
import Pagination from '../../../misc/pagination/Pagination'
import { isEmpty } from '../../../../utils/isEmpty'
import { connect } from 'react-redux'
import Card from './Contact/index'
import { redirectSingleContact } from '../../../../actions/contactsActions'



class index extends Component {






    state = {
        name: ''
    }





    inputChangeHandler = (e) => {


        e.persist();
        console.log('in callback');
        this.setState(function (prevState, props) {



            return {
                name: e.target.value
            }
        }, () => {

        })

    }

    resetName = () => {
        this.setState({
            name: ''
        })
    }


    renderContacts = () => {



        if (this.props.contacts) {



            return this.props.contacts.contacts.map((contact) => {

                return (<Card contact={contact} redirectSingleContact={this.props.redirectSingleContact} />)

            })


        } else if (this.props.contacts && this.props.contacts.contacts.length < 1) {

            return <div className="d-flex h-100 justify-content-center">

                <h3 className="display-2">No Contacts Yet</h3>
            </div>

        } else {
            return <div className="d-flex h-100 justify-content-center">

                <h3 className="display-2">Loading</h3>
            </div>
        }





    }





    render() {






        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-6 col-sm-12 py-2">
                        <div className="form-group">
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-zoom-split-in"></i></span>
                                </div>
                                <input
                                    className="form-control" placeholder="search by name" type="text" name="name"
                                    onChange={this.inputChangeHandler}
                                />

                                <button className="btn" style={{
                                    backgroundColor: '#D09E88'
                                }}
                                    onClick={() => {
                                        this.props.getContacts({ name: this.state.name })
                                        this.resetName()

                                    }}
                                >
                                    search
                                </button>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 col-sm-12 ">

                        <div className="card m-2 p-2 d-flex flex-row ">

                            <div className="mx-2">

                                <span>sort by - </span>

                            </div>
                            <div className="mx-2">
                                <i
                                    class="fas fa-sync-alt"
                                    style={{
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                        marginTop: '6px'
                                    }}
                                    onClick={
                                        () => {
                                            this.props.getContacts({}, 1)



                                        }


                                    }
                                >

                                </i>


                            </div>
                            <div className="mx-2">
                                <i
                                    class="far fa-calendar-plus"
                                    style={{
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                        marginTop: '6px'
                                    }}
                                    onClick={() => { this.props.getContacts({ date: -1 }, 1) }}
                                >

                                </i>


                            </div>
                            <div className="mx-2">
                                <i
                                    class="far fa-calendar-minus"
                                    style={{
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                        marginTop: '6px'
                                    }}
                                    onClick={() => { this.props.getContacts({ date: 1 }, 1) }}
                                >

                                </i>


                            </div>
                            <div className="mx-2">
                                <i
                                    class="fas fa-font"
                                    style={{
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                        marginTop: '6px'
                                    }}
                                    onClick={() => { this.props.getContacts({ sortName: -1 }, 1) }}
                                >

                                </i>


                            </div>
                            <div className="mx-2">
                                <i
                                    class="fas fa-font fa-flip-vertical"
                                    style={{
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                        marginTop: '6px'
                                    }}
                                    onClick={() => { this.props.getContacts({ sortName: 1 }, 1) }}
                                >

                                </i>


                            </div>


                        </div>

                    </div>

                </div>

                <div className="my-2 py-2">
                    <Pagination
                        items={this.props.contacts ? this.props.contacts : []}
                        submitCallback={this.props.getContacts}
                    />

                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        {this.renderContacts()}

                    </div>
                </div>


            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    contacts: !isEmpty(state.contacts) ? state.contacts.contacts : null
})


const mapDispatchToProps = {
    redirectSingleContact
}



export default connect(mapStateToProps, mapDispatchToProps)(index);