import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { withAlert } from 'react-alert'

class Alerts extends Component {

  componentDidUpdate(prevProps) {
    const { error, msg, alert } = this.props
    if (error !== prevProps.error) {
      alert.error(error)
    }
    if (msg !== prevProps.msg) {
      alert.success(msg)
    }


  }

  render() {
    return <Fragment />;
  }

}

const mapStateToProps = (state) => ({
  error: state.errorReducer.error,
  msg: state.messageReducer.msg,
})


export default connect(mapStateToProps)(withAlert(Alerts))
