import React, { Component, Fragment } from 'react'
import { items, adminItems } from './navitems'
import styles from './Navbar.module.css';
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/userActions'
import { NavLink } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink as NavLinkBS,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


class NavBar extends Component {



    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }




    render() {







        return (
            <Fragment>
                <div>
                    <Navbar

                        expand="md"
                        style={{ backgroundImage: 'linear-gradient(to right,  #ABD0CE 0%, #ABD0CE 100%)' }}
                        dark
                    >
                        <NavbarBrand href="/dashboard" style={{ fontSize: '20px' }}> Contact App </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <div className="navbar-collapse-header">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="/">
                                            <i className="ni ni-collection m-2"></i>

                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" onClick={this.toggle}>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <ul className="navbar-nav ml-lg-auto">
                                <li className="nav-item"
                                    onClick={this.toggle}

                                >
                                    <NavLink className="nav-link" style={{ cursor: 'pointer', fontSize: '16px', letterSpacing: '2px' }} to="/dashboard"

                                    >Contacts</NavLink>
                                </li>
                                <li className="nav-item" onClick={this.toggle}>
                                    <NavLink className="nav-link" style={{ cursor: 'pointer', fontSize: '16px', letterSpacing: '2px' }} to="/dashboard/create">Create Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a
                                        onClick={this.props.logoutUser}
                                        className="nav-link" style={{ cursor: 'pointer', fontSize: '16px', letterSpacing: '2px' }} >Log Out</a>
                                </li>


                            </ul>

                        </Collapse>
                    </Navbar>
                </div>

            </Fragment >
        )
    }
}


// const mapStateToProps = (state) => ({
//     user: state.user.userData
// })

const mapDispatchToProps = {
    logoutUser

}



export default connect(null, mapDispatchToProps)(NavBar);