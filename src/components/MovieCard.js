import { Card, Button } from "react-bootstrap";

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
                Directed by: {director},
            </Card.Text>
            <Card.Footer>
                <Card.Text>
                Genre: {genre}

                </Card.Text>
            <Button variant="primary">See Review</Button>
            </Card.Footer>
        </Card.Body>
        </Card>
    )
}

export default MovieCard