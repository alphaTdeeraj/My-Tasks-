import React, { Component } from 'react'
import { connect } from 'react-redux'
import { markComplete } from '../../actions/tasks'

class Task extends Component {

    buttonColor = (completed) => {
        let color = 'btn btn-primary lead btn-'
        if (completed) {
            color = color + 'success'
        }
        else {
            color = color + 'danger'
        }
        return color
    }

    render() {
        const { category, completed, deadline, description, id, name, start } = this.props.task
        return (
            <div style={{ width: '60rem', }} className=' dark col-md-6 my-1'>
                <div className="card mx-3 p-3" >
                    <div className="card-body ">
                        <h5 className="card-title text-italic">Name: {name}</h5>
                        <p className="lead card-text">Description: {description}</p>
                        <p className="card-text lead font-italic">Deadline: {deadline}</p>
                        <button onClick={this.props.markComplete.bind(this, id, name)} type="button" className={this.buttonColor(completed)}>Mark completed</button>
                    </div>
                </div>
            </div >
        )
    }
}

export default connect(null, { markComplete })(Task)
