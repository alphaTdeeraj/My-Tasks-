import { GET_TASKS, ADD_TASK, MARK_COMPLETE } from '../actions/types';



const intialState = {
    tasks: [],
}

export default function (state = intialState, action) {

    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case ADD_TASK:
            console.log([action.payload, ...state.tasks])
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]

            }
        case MARK_COMPLETE:
            return {
                ...state , 
                tasks : state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }

}