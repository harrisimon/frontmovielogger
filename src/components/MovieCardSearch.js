import { Card, Button } from "react-bootstrap"
import { Navigate } from "react-router"

const MovieCardSearch = (props) => {
	const { image, title, releaseYear, imdbId, onAdd, onSelect } = props

	let poster
	if (image !== "N/A") {
		poster = <Card.Img variant="top" src={image} />
	}

	const handleNewEntry = (e) => {
		e.preventDefault()
		onSelect(imdbId)
		onAdd(false)
	}

	return (
		<Card style={{ width: "18rem" }}>
			{poster}
			<Card.Body>
				<Card.Title>
					{title}, {releaseYear}
				</Card.Title>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary" onClick={handleNewEntry}>
					More
				</Button>
			</Card.Footer>
		</Card>
	)
}

export default MovieCardSearch
