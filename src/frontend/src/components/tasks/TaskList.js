import React, { Component } from 'react'
import { connect } from 'react-redux'

import Task from './Task'
import TaskForm from './TaskForm'
import { getTasks } from '../../actions/tasks';

class TaskList extends Component {
    componentDidMount() {
        //make request to get user tasks 
        this.props.getTasks()

    }
    render() {
        return (
            <div className='container mt-1 ml-3'>
                <div className='row'>
                    {this.props.tasks.map(task => (<Task key={task.id} task={task} />))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasksReducer.tasks
})

export default connect(mapStateToProps, { getTasks })(TaskList)
