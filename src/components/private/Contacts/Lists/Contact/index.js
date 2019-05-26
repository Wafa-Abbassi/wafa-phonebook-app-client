
import React, { Component } from 'react'




class index extends Component {






    render() {

        const { contact } = this.props;

        return (

            <div
                className="container my-2 py-2 card shadow"
                style={{
                    cursor: 'pointer'
                }}
                onClick={() => { this.props.redirectSingleContact(contact, '/single') }}

            >


                <div className="d-flex justify-content-center">

                    <div className=" mx-2  ">

                        <img
                            src={contact.images.length > 0 ? contact.images[0].url : 'https://via.placeholder.com/150'}
                            class="img-fluid img-thumbnail "
                            alt="Responsive image"
                            style={{
                                borderRadius: '50%',
                                width: '100px',
                                height: '100px',
                                objectFit: 'cover'

                            }}

                        />

                    </div>
                    <div className="mx-2 my-2">

                        <span>      {contact.name || 'name'}</span>


                    </div>
                    <div className="mx-2 my-2">

                        <span>
                            <i class="fas fa-phone"></i>{contact.number || 'number'}
                        </span>

                    </div>
                </div>

            </div>
        )
    }
}



export default index;