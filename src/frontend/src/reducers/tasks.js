import { GET_TASKS, ADD_TASK } from '../actions/types';



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
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state
    }

}