import GET_TASKS from '../actions/types';



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
        default:
            return state
    }

}