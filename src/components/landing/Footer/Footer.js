import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

import styles from './Footer.module.css'


function Footer() {





    return (




        <footer
            className={`section-lg ${styles.footerWrapper}`}
        >

            <div className="container">


                <div className="row text-center">

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h4 className="text-white" >PhoneBook App</h4>
                        <p className="text-white" >Created by  Wafa Abbassi</p>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">


                        <Nav vertical className="">
                            <NavItem >
                                <NavLink className={`${styles.linkItem}`} href="#">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={`${styles.linkItem}`} href="#">About Contact App</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={`${styles.linkItem}`} href="#">Future Plans</NavLink>
                            </NavItem>

                        </Nav>
                    </div>


                </div>



            </div>


        </footer>

    )
}



export default Footer;