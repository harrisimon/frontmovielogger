import apiUrl from "../apiConfig"
import axios from "axios"

export const getLogs = (user) => {
	return axios({
		method: "GET",
		url: apiUrl + "/reviews",
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const getMyLogs = (user) => {
	return axios({
		method: "GET",
		url: apiUrl + "/mine",
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const addLog = (user, review) => {
	// console.log(log)
	return axios({
		method: "POST",
		url: apiUrl + "/reviews",
		data: { review },
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const getLog = (user, id) => {
	return axios({
		method: "GET",
		url: apiUrl + "/reviews/" + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const deleteLog = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/reviews/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}
