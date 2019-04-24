import axios from 'axios'
import { getErrors, createMessage } from './messages'
import { GET_TASKS, ADD_TASK, MARK_COMPLETE } from './types';

export const getTasks = () => dispatch => {
    axios.get('/tasks/')
        .then(res => dispatch({
            type: GET_TASKS,
            payload: res.data
        }))
        .catch(err => dispatch(getErrors(err.data)))

}

export const addTask = (name, description, deadline) => dispatch => {
    const config = {
        "Content-Type": 'application/json',
    }
    const body = {
        "name": name,
        "description": description,
        "category": "Learning",
        "deadline": deadline,
    }
    axios.post("/tasks/", body, config)
        .then(res => dispatch({
            type: ADD_TASK,
            payload: res.data
        }))
        .then(res => dispatch(createMessage('Task added')))
        .catch(err => dispatch(getErrors(err.data)))
}


export const markComplete = (id) => dispatch => {
    const config = {
        "Content-Type": 'application/json'
    }
    const body = {
        "completed": true,

    }
    axios.patch(`/tasks/${id}/`, body, config)
        .then(res => dispatch({
            type: MARK_COMPLETE,
            payload: id,
        }))
        .catch(err => dispatch(getErrors(err.data)))
}