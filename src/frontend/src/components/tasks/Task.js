import React, { Component } from 'react'
import { connect } from 'react-redux'
import { markComplete } from '../../actions/tasks'

class Task extends Component {

    render() {
        const { id, name, description, startdate, deadline } = this.props.task
        return (
            <div style={{ width: '60rem', }} className=' dark col-md-6 my-1'>
                <div className="card mx-3 p-3" >
                    <div className="card-body ">
                        <h5 className="card-title text-italic">{name}</h5>
                        <h5 className="card-title">{deadline}</h5>
                        <p className="card-text lead">{description}</p>
                        <button onClick={this.props.markComplete.bind(this, id)} type="button" className="btn btn-primary lead">Mark completed</button>
                    </div>
                </div>
            </div >
        )
    }
}


export default connect(null, { markComplete })(Task)
