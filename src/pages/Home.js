import { useEffect, useState } from "react"
import { getLogs, getMyLogs } from "../api/logs"
import Container from "react-bootstrap/Container"
import MovieCard from "../components/MovieCard"
import { CardGroup, Col, Row, Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"

//look into pagination
const Home = (props) => {
	// const [logs, setLogs] = useState(null)
	const {userLogs, logs} = props

	// useEffect(() => {
	// 	getLogs(props.user).then((res) => {
	// 		setLogs(res.data.logs)
	// 		// console.log("the res", res.data.logs)
	// 	})
		
	// }, [])
	let renderedLogs
	if (logs) {
		renderedLogs = logs.map((log) => {
			return (
				<MovieCard
					key={log._id}
					genre={log.genre}
					director={log.director}
					image={log.poster}
					title={log.movieTitle}
					releaseYear={log.releaseYear}
					id={log.id}
				/>
			)
		})
	}
	return (
		<Container>
			the home page

			{/* add link to add post */}
			<Row>
				<h1>My Posts</h1>
				<Link to="/my-logs">go</Link>
			</Row>
			{/* add my posts */}
			<Row>
				<h1>Recommended Movies</h1>
			</Row>
			{/* add recommendation page */}
			{/* <CardGroup> */}

			<Col>
				<h1>Latest Posts</h1>
			</Col>
			<Row xs={1} md={2} className="g-4">
				{renderedLogs}
			</Row>
			{/* </CardGroup> */}
		</Container>
	)
}

export default Home
