import React, { Component } from 'react'

class Task extends Component {

    render() {
        return (
            <div style={{ width: '20rem', border: 'dark' }} className=' dark col-md-6 my-2'>
                <div className="card ml-1" >
                    <div className="card-body ">
                        <h5 className="card-title">title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div >
        )
    }
}


export default Task
