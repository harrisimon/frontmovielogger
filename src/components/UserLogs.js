import { useEffect, useState, useCallback } from "react"
import { getMyLogs } from "../api/logs"
import axios from "axios"
import MovieCard from "./MovieCard"
import { Container, CardGroup, Row } from "react-bootstrap"
import Recommendations from "./Recommendations"
import Pagination from "./Pagination"
const UserLogs = (props) => {
	const {logs} = props
	const [mostWatched, setMostWatched] = useState(null)
	const [favActor, setFavActors] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [recordsPerPage] = useState(5)

	let renderedLogs
	let actors = {}

	if (logs) {
		logs.map((log) => {
			log.actors.forEach(
				(actor) => (actors[actor] = (actors[actor] || 0) + 1)
			)
		})
		let mostWatched = Object.keys(actors).reduce((a, b) =>
			actors[a] > actors[b] ? a : b
		)

		console.log(mostWatched, actors)

		const getMoreByActor = (query) => {
			return axios.get(
				`https://api.themoviedb.org/3/search/person?api_key=a0900a4fc790e96b93869d26be959346&language=en-US&query=${query}&page=1&include_adult=false`
			)
		}

		renderedLogs = logs.map((log) => {
			return (
				<MovieCard
					key={log.id}
					genre={log.genre}
					director={log.director}
					image={log.poster}
					title={log.movieTitle}
					releaseYear={log.releaseYear}
					id={log._id}
				/>
			)
		})
	}

	return (
		<Container>
			<Recommendations userLogs={logs} />
			<div>
				<Row>{renderedLogs}</Row>
			</div>
		</Container>
	)
}
export default UserLogs
