import { useState, useEffect } from "react"
import { getLog } from "../api/logs"
import { useParams, useNavigate } from "react-router"
import { Container, Row, Card, Button } from "react-bootstrap"
import { deleteLog } from "../api/logs"

const ReviewDetail = (props) => {
	const [log, setLog] = useState(null)
	console.log("props",props)
	const { user, submitted, setSubmitted } = props
	const { id } = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		getLog(user, id).then((res) => {
			setLog(res.data.log)
		})
	}, [])

	const deleteReview = (e) => {
		e.preventDefault()
		deleteLog(user, log.id)
			.then(console.log('deleted!'))
			.then(setSubmitted(submitted + 1))
			.then(navigate('/user'))
	}

	let image
	let card
	let remove
	if (log !== null) {
		if(user._id === log.author._id){
			remove = (<Button variant="danger" onClick={deleteReview}>Delete</Button>)

		}
		card = (
			<Card style={{ width: "50%" }}>
				<Card.Img variant="left" src={`${log.poster}`}></Card.Img>
				<Card.Body>
					<Card.Title>{log.movieTitle} ({log.releaseYear})<br/>{log.director}</Card.Title>
				</Card.Body>
				<Card.Body>{log.plot}</Card.Body>
				<Card.Footer>{remove}</Card.Footer>
			</Card>
		)
		console.log("the log", log)
		image = (
			<div>
				<img src={`${log.poster}`} alt="poster" />
			</div>
		)
	}

	return (
		<Container >
			<Row className="m-3">{card}</Row>
		</Container>
	)
}

export default ReviewDetail
