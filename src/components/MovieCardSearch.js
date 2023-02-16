import { Card, Button } from "react-bootstrap";
import { Navigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const MovieCardSearch = (props) => {
    const {image, director, genre, title, releaseYear, imdbId, id, onShow} = props


    let poster
    if(image !== 'N/A'){
        poster = <Card.Img variant='top' src={image} />
    }
    
    return (
        <Card style={{ width: '18rem' }}>
            {poster}
        <Card.Body>
            <Card.Title>
                {title}, {releaseYear}
            </Card.Title>
            <Card.Footer>
            <Button variant="primary" onClick={() => console.log(imdbId)}>Add Review</Button>
            </Card.Footer>
        </Card.Body>
        </Card>
    )
}

export default MovieCardSearch