import React, { Component, Fragment } from 'react'
import styles from './Hero.module.css'
import { connect } from 'react-redux'
import { Link, RichText, Date } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import AccountKit from '../../../services/accountkit';
import { accountKitLogin } from '../../../actions/userActions'
import LoadingComponent from '../../misc/Loading/LoadingComponent'
import Footer from '../Footer/Footer'
import Video from './Android-Scroll.mp4'
import Authenticated from '../../misc/auth/Authenticated'


class Hero extends Component {



    componentDidMount = () => {






    }

    accountKitLoginHandler = (resp) => {

        this.props.accountKitLogin(resp.code)

    }

    renderHero = () => {







        return (

            <Fragment>
                <header className={styles.headerWrapper}>

                    <video className={styles.video} playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src={Video} type="video/mp4" />>
 </video>

                    <div className={`${styles.container} h-100`}>


                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">


                                <h2 className="text-white display-2">Phone Book</h2>
                                <p>Make contacts by creating account by your phone number</p>


                                <AccountKit
                                    appId={'838608299828724'}
                                    version="v1.1"
                                    onResponse={(resp) => { this.accountKitLoginHandler(resp) }}
                                    csrf={'yngWIE273929'}
                                    countryCode={'+216'}
                                    display={"modal"}



                                >
                                    {p => <button className={`${styles.btnDesign} btn`} style={{

                                        color: '#fff'
                                    }}  {...p} >Enter Account</button>}
                                </AccountKit>


                            </div>
                        </div>
                    </div>
                    <div className={styles.overlayWrapper}>

                    </div>
                </header>

                <Footer />
            </Fragment>


        )




    }

    render() {

        return (
            this.renderHero()
        )
    }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    accountKitLogin
}


export default connect(mapStateToProps, mapDispatchToProps)(Hero);