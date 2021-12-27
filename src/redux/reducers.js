import { SET_USER_NAME, SET_USER_AGE, INCREASE_AGE, GET_CITIES, SET_TASKS, SET_TASKS_ID } from './actions'

const initialState = {
	name: '',
	age: 0,
	cities: [],
	tasks: [],
	taskID: 1,
}

function userReducer(state = initialState, action) {
	switch(action.type) {
		case SET_USER_NAME:
			return {...state, name: action.payload}
		case SET_USER_AGE:
			return {...state, age: action.payload}
		case INCREASE_AGE:
			return {...state, age: state.age + 1}
		case GET_CITIES:
			return {...state, cities: action.payload}
		case SET_TASKS:
			return {...state, tasks: action.payload}
		case SET_TASKS_ID:
			return {...state, taskID: action.payload}
		default:
			return state
	}
}

export default userReducer