import { useState, useEffect } from "react"
import { Form, Container, Button, InputGroup, Row, Card } from "react-bootstrap"
import MovieCardSearch from "./MovieCardSearch"
import AddLogReviewCard from "./AddLogReviewCard"
import { addLog } from "../api/logs"
import axios from "axios"

const AddLog = (props) => {
	const { user } = props

	const [query, setQuery] = useState("")
	const [results, setResults] = useState(null)
	const [searching, setSearching] = useState(true)
	const [selection, setSelection] = useState(null)
	const [log, setLog] = useState(null)
	const [review, setReview] = useState("")

	const handleChange = (e) => {
		setQuery(e.target.value)
	}
	const handleReviewChange = (e) => {
		setReview(e.target.value)
	}
	// const handleSubmitLog = (user, log, e) => {
	//     // addLog(user)
	//     //     .then()
	//     e.preventDefault()
	//     console.log(user)

	// }

	const searchQuery = async (query, e) => {
		e.preventDefault()
		const res = await axios.get(
			`http://www.omdbapi.com/?apikey=764389f4&i&s=${query}`
		)
		// console.log(res.data)
		setReview("")
		setResults(res.data.Search)
		setSearching(true)
	}

	let list
	if (results && searching) {
		// add movie card and pagination
		list = results.map((res) => {
			return (
				<MovieCardSearch
					key={res.imdbId}
					title={res.Title}
					image={res.Poster}
					releaseYear={res.Year}
					imdbId={res.imdbID}
					onAdd={setSearching}
					onSelect={setSelection}
				/>
			)
		})
	}

	if (selection) {
		const seachSelection = async (selection) => {
			const res = await axios.get(
				`http://www.omdbapi.com/?apikey=764389f4&i&i=${selection}`
			)
			// console.log(res.data)
			setLog(res.data)
			setSelection(null)
		}
		seachSelection(selection)
	}

	let card
	if (log) {
		// console.log(log)
		card = (
			<AddLogReviewCard
				log={log}
				onChange={handleReviewChange}
				userThoughts={review}
				user={user}
			/>
		)
	}

	return (
		<div>
			<Container>
				<h1>Add a post</h1>
				<Form onSubmit={(e) => searchQuery(query, e)}>
					<InputGroup>
						<Form.Control
							autoFocus
							size="large"
							placeholder="Enter movie title..."
							value={query}
							onChange={handleChange}
						/>
						<Button variant="primary" type="submit">
							Search
						</Button>
					</InputGroup>
				</Form>
				<br />
				<Row>{list}</Row>
				{card}
			</Container>
		</div>
	)
}

export default AddLog
