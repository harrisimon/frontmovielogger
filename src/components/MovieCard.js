import { Card, Button } from "react-bootstrap";
import { getLog } from "../api/logs";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
    const {image, director, genre, title, releaseYear, id} = props


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={image} />
        <Card.Body>
            <Card.Title>
                {title}, {releaseYear}
            </Card.Title>
            <Card.Text>
                Directed by: {director}
            </Card.Text>
            <Card.Footer>
                <Card.Text>
                Genre: {genre}

                </Card.Text>
                <Link to={`/reviews/${id}`}>
							<Button primary>View Character</Button>
						</Link>
            <Button variant="primary">See Review</Button>
            </Card.Footer>
        </Card.Body>
        </Card>
    )
}

export default MovieCard