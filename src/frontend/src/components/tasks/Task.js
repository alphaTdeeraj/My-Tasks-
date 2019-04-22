import React, { Component } from 'react'

class Task extends Component {

    render() {
        const { id, name, description, startdate, deadline } = this.props.task
        return (
            <div style={{ width: '60rem', border: 'dark' }} className=' dark col-md-6 my-1 p-3'>
                <div className="card mx-3 p-3" >
                    <div className="card-body ">
                        <h5 className="card-title text-italic">{name}</h5>
                        <h5 className="card-title">{deadline}</h5>
                        <p className="card-text lead">{description}</p>
                        <a href="#" className="btn btn-primary">Mark complete</a>
                    </div>
                </div>
            </div >
        )
    }
}


export default Task
