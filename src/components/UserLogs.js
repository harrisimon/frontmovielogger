import { useEffect, useState } from "react"
import { getMyLogs } from "../api/logs"
import MovieCard from "./MovieCard"
import { Container } from "react-bootstrap"
const UserLogs = (props) => {
	const [userLogs, setUserLogs] = useState(null)

	useEffect(() => {
		getMyLogs(props.user).then((res) => {
			setUserLogs(res.data.logs)
			console.log("user logs", res.data.logs)
		})
	}, [])
	console.log(userLogs)
	let renderedLogs
	if (userLogs) {
		renderedLogs = userLogs.map((log) => {
			return (
				<MovieCard
					key={log._id}
					genre={log.genre}
					director={log.director}
					image={log.poster}
					title={log.movieTitle}
					releaseYear={log.releaseYear}
				/>
			)
		})
	}

	return (
		<Container>
			<div>
				user logs
				{renderedLogs}
			</div>
		</Container>
	)
}
export default UserLogs
