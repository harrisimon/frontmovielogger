import { Card, Button } from "react-bootstrap"
import { getLog } from "../api/logs"
import { Link } from "react-router-dom"

const MovieCard = (props) => {
	const { image, director, genre, title, releaseYear, id, author } = props

	const genreList = genre.join(", ")
	console.log(author)
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>
					{title}, {releaseYear}
				</Card.Title>
				<Card.Text>Directed by: {director}</Card.Text>
				<Card.Text>Logged by: {author.email}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Card.Text>Genre: {genreList}</Card.Text>
				<Link to={`/reviews/${id}`}>
					<Button>View Log</Button>
				</Link>
			</Card.Footer>
		</Card>
	)
}

export default MovieCard
