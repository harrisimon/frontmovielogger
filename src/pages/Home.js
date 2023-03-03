import { useEffect, useState } from "react"
import { getLogs, getMyLogs } from "../api/logs"
import Container from "react-bootstrap/Container"
import MovieCard from "../components/MovieCard"
import { CardGroup, Col, Row, Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"

//look into pagination
const Home = (props) => {
	// const [logs, setLogs] = useState(null)
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [logsPerPage, setPostsPerPage] = useState(6)
	const { userLogs, logs } = props

	useEffect(() => {
		setLoading(false)
	}, [])
	let renderedLogs
	let pagination
	let items = []
	if (logs) {
		const indexOfLastLog = currentPage * logsPerPage
		const indexOfFirstPost = indexOfLastLog - logsPerPage
		const currentLogs = logs.slice(indexOfFirstPost, indexOfLastLog)
		
		const nPages = Math.ceil(logs.length / logsPerPage)
		renderedLogs = currentLogs.map((log) => {
			return (
				<MovieCard
					key={log._id}
					genre={log.genre}
					author={log}
					director={log.director}
					image={log.poster}
					title={log.movieTitle}
					releaseYear={log.releaseYear}
					id={log.id}
				/>
			)
		})
		for (let i = 1; i <= nPages; i++) {
			items.push(
				<Pagination.Item
					key={i}
					active={i === currentPage}
					onClick={() => setCurrentPage(i)}
				>
					{i}
				</Pagination.Item>
			)
		}
		pagination = (
			<Pagination nPages={nPages} currentPage={currentPage} totalPages={logs.length} className='m-2 position-sticky end'>
				{items}
			</Pagination>
		)
	}
	return (
		<Container className="d-flex flex-column bd-highlight">
			<Row>
			<Link to="/my-logs"><h1>My Posts</h1></Link>
			</Row>
			<Col>
				<h1>Latest Posts</h1>
			</Col>
			<Row  className="p-2 bd-highlight">
				<CardGroup>

				{renderedLogs}
				</CardGroup>
			</Row>
				{pagination}
			{/* </CardGroup> */}
		</Container>
	)
}

export default Home
