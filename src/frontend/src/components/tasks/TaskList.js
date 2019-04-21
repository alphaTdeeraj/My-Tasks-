import React, { Component } from 'react'
import { connect } from 'react-redux'
import Task from './Task'


class TaskList extends Component {
    render() {
        return (
            <div className='container mt-3 ml-2'>
                <div className='row'>
                    <Task />
                    <Task />
                    <Task />
                    <Task />

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasksReducer.tasks
})

export default connect(mapStateToProps)(TaskList)
