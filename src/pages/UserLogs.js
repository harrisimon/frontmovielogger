import { useEffect, useState, useCallback } from "react"
import { getMyLogs } from "../api/logs"
import axios from "axios"
import MovieCard from "../components/MovieCard"
import { Container, CardGroup, Row } from "react-bootstrap"
import Recommendations from "../components/Recommendations"
import Pagination from "../components/Pagination"
const UserLogs = (props) => {
	const { logs } = props
	const [mostWatched, setMostWatched] = useState(null)
	const [favActor, setFavActors] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [recordsPerPage] = useState(5)

	let renderedLogs
	let recommendation

	if (logs !==null) {
		recommendation = <Recommendations userLogs={logs} />
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
	} else {
		renderedLogs = "loading"
		recommendation = "loading"
	}

	return (
		<Container>
			<div>
				{recommendation}
				<Row>{renderedLogs}</Row>
			</div>
		</Container>
	)
}
export default UserLogs
