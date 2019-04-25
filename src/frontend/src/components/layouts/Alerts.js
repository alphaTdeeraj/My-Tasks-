import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
class Alerts extends Component {

  componentDidUpdate(prevProps) {
    const { error, msg } = this.props
    if (error !== prevProps.error) {
      Swal.fire({
        type: 'error',
        title: 'Error ',
        text: 'Please provide valid data ',
      })
    }
    if (msg !== prevProps.msg) {
      Swal.fire({
        position: 'inherit',
        type: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1500
      })
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


export default connect(mapStateToProps)(Alerts)
