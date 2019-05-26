
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Home from './components/landing/Home'
import Authenticated from './components/misc/auth/Authenticated'
import Dashboard from './components/private/dashboard/DashBoard'
import ModalManager from './components/misc/modalManager/modalManager';
import NotFound from './components/NotFound'
import { trackGoogleAnalytics } from './services/ga/ga'
import Single from './components/private/SingleContact/index'




class Routes extends React.Component {





  componentDidMount = () => {
    window.ga('create', '', 'auto');


  }




  render() {


    trackGoogleAnalytics(this.props.location)



    return (

      <div>

        <ModalManager />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Route path="/single" render={() => <Single />} />
          <Route path="*" component={NotFound} />
        </Switch>

        <MessengerCustomerChat
          pageId=""
          appId=""
          htmlRef=""
        />
      </div >




    )

  }


}




export default withRouter(Routes);

