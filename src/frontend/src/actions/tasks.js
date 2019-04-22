import axios from 'axios'
import { getErrors, createMessage } from './messages'
import { GET_TASKS, } from './types';

export const getTasks = () => dispatch => {
    axios.get('/tasks/')
        .then(res => dispatch({
            type: GET_TASKS,
            payload: res.data
        })).then(res => dispatch(createMessage('Loaded your task')))
        .catch(err => dispatch(getErrors(err.data)))

}

export const addTask = (name, description, deadline) => dispatch => {
    const config = {
        "Content-Type": 'application/json',
        "headers": {
            'X-CSRFToken': '{{csrf_token}}'
        }
    }
    const body = {
        "name": name,
        "description": description,
        "category": "Learning",
        "deadline": deadline,
    }
    console.log(`this is the body ${body.deadline}`)
    axios.post("/tasks/", body, config)
        .then(res => console.log(res.data)).then(res => console.log('above was from response'))
        .catch(err => dispatch(getErrors(err.data)))
}