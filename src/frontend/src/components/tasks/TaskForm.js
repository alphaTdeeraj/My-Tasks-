import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTask } from '../../actions/tasks'


class TaskForm extends Component {

    state = {
        name: '',
        description: '',
        deadline: new Date(Date.now()),

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        const { name, description, deadline } = this.state
        e.preventDefault()
        this.props.addTask(name, description, deadline)
        this.props.history.push("/")
        this.setState({
            name: '',
            description: '',
            deadline: new Date(Date.now()),
        })
    }

    render() {
        const { name, description, deadline } = this.state;
        return (

            <div className="card card-body mt-4 mb-4">
                <h2 className='text-center'>Add Your Task </h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className='lead'>Name</label>
                        <input
                            className="form-control"
                            maxLength="30"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label className='lead'>Description</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            onChange={this.onChange}
                            value={description}
                        />
                    </div>
                    <div className="form-group">
                        <label className='lead'>DeadLine</label>
                        <input
                            className="form-control"
                            type="date"
                            name="deadline"
                            onChange={this.onChange}
                            value={deadline}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addTask, })(TaskForm)
