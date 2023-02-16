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
				<Card.Footer>
					<Button
						variant="primary"
						onClick={handleNewEntry}
					>
						Add Review
					</Button>
				</Card.Footer>
			</Card.Body>
		</Card>
	)
}

export default MovieCardSearch
