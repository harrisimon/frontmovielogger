import { useState, useEffect } from "react"
import { Card, Container, Form, Button } from "react-bootstrap"
import { addLog } from "../api/logs"

const AddLogReviewCard = (props) => {
	const { log, onChange, userThoughts, user } = props

    // if(log){
        const review = {
            userThoughts: userThoughts,
            imdbId: log.imdbID,
            movieTitle: log.Title,
            releaseYear: log.Year,
            poster: log.Poster,
            director: log.Director.split(","),
            genre: log.Genre.split(', '),
            plot: log.Plot,
        }
        // return review
        // console.log(logObj)
    // }
	const handleSubmit = (e, user, review) => {
		e.preventDefault()
        console.log("the review",review)
        addLog(user, review)
            .then(console.log('added'))
            .catch((err)=>console.log(err))

		// console.log(user, log)
	}
	return (
		<Container>
			<Card >
                <div className="card-left">

				<Card.Img src={log.Poster} />
				<div className="log-card-body">
					<Card.Header>
						<span>
							<Card.Title>
								{log.Title} <small>({log.Year})</small>{" "}
							</Card.Title>
							{log.Genre} {log.Runtime}
						</span>
					</Card.Header>
					<Card.Body>
						<div>Directed by: {log.Director}</div>
						<br />
						{log.Plot}
						<br />

						<Form onSubmit={(e) => handleSubmit(e, user, review)}>
							<Form.Label>Review</Form.Label>
							<Form.Control
								as="textarea"
								value={userThoughts}
								onChange={onChange}
                                rows={"10"}
                                style={{height: '8rem', resize:'none'}}
                                ></Form.Control>
							<Button type="submit">Add</Button>
						</Form>
					</Card.Body>
				</div>
                                </div>
			</Card>
		</Container>
	)
}
export default AddLogReviewCard
