import apiUrl from "../apiConfig";
import axios from "axios";

export const getLogs = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/reviews',
        headers: {
			Authorization: `Token token=${user.token}`,
		},
    })
}