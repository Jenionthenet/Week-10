//higher order component- will pass another component to this component to and this component will decide
// whether the passed in component get rendered or not
import { Component } from 'react'
import { connect } from 'react-redux'


export default function(ComposedComponent) {

    class Authenticate extends Component {

        constructor(props) {

            super(props)

            if(!this.props.isAuthenticated) {
                this.props.history.push('/')
            }

        }
        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.isAuthenticated
        }
    }


    return connect(mapStateToProps)(Authenticate)
}