import { ADD_ENTRY, DELETE_ENTRY, UPDATE_ENTRY, REQUEST_ENTRIES, RECEIVE_ENTRIES } from '../actions'
import axios from 'axios'

const initialState = {
	isFetching: false,
	didInvalidate: false,
	items: [
		{id: -1, food: {name: 'Chili', unit: 'g'}, amount: 200},
		{id: -2, food: {name: 'Yogurt', unit: 'g'}, amount: 150},
		{id: -3, food: {name: 'Peanuts', unit: 'g'}, amount: 30}
	]
}

const entries = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ENTRY:
			return Object.assign({}, state, {
				items: [...state.items, {id: action.id, food: action.food, amount: action.amount}]
			})
		case DELETE_ENTRY:
			return Object.assign({}, state, {
				items: state.items.filter((entry) => entry.id !== action.id)
			})
		case REQUEST_ENTRIES:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_ENTRIES:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.entries,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

export default entries