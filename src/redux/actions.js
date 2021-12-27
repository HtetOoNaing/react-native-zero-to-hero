export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_AGE = 'SET_USER_AGE'
export const INCREASE_AGE = 'INCREASE_AGE'
export const GET_CITIES = 'GET_CITIES'
export const SET_TASKS = 'SET_TASKS'
export const SET_TASKS_ID = 'SET_TASKS_ID'

const API_URL = "https://mocki.io/v1/531bdef2-a582-44cb-add4-865d0b1e77ea";

export const getCities = () => {
	try {
		return async dispatch => {
			const result = await fetch(API_URL, {
				method: 'GET',
				headers: {
					'Content-Type': "application/json"
				}
			})
			const json = await result.json()
			if(json) {
				dispatch({
					type: 'GET_CITIES',
					payload: json
				})
			} else {
				console.log('Unable to fetch!')
			}
		}
	} catch (error) {
		console.log(error)
	}
}

export const setName = name => dispatch => {
	dispatch({
		type: SET_USER_NAME,
		payload: name
	})
}

export const setAge = age => dispatch => {
	dispatch({
		type: SET_USER_AGE,
		payload: age
	})
}

export const increaseAge = age => dispatch => {
	dispatch({
		type: INCREASE_AGE,
		payload: age
	})
}

export const setTasks = tasks => dispatch => {
	dispatch({
		type:	SET_TASKS,
		payload: tasks
	})
}

export const setTaskID = taskID => dispatch => {
	dispatch({
		type:	SET_TASKS_ID,
		payload: taskID
	})
}