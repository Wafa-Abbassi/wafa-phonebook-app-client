import React, { Component } from 'react'
import Filters from './Filters'
import Lists from './Lists'
import { connect } from 'react-redux'
import { isEmpty } from '../../../utils/isEmpty'






class Contacts extends Component {









    render() {

        console.log(this.props.contacts)

        return (
            <div>
                {/* <Filters /> */}
                <Lists getContacts={this.props.getContacts} />
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    contacts: !isEmpty(state.contacts) ? state.contacts.contacts : null
})

const mapDispatchToProps = {

}





export default connect(mapStateToProps, mapDispatchToProps)(Contacts);