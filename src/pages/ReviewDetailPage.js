import { useState, useEffect } from "react"
import { getLog } from "../api/logs"
import { useParams, useNavigate } from "react-router"
import {
	Container,
	Row,
	Card,
	Button,
	Form,
	Col,
	Spinner,
	InputGroup,
} from "react-bootstrap"
import { deleteLog, addComment } from "../api/logs"
import Comment from "../components/Comment"

const ReviewDetail = (props) => {
	const [log, setLog] = useState(null)
	const [comment, setComment] = useState("")
	const [updatedLog, setUpdatedLog] = useState(false)
	const { user, triggerRefresh } = props
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		getLog(user, id)
			.then((res) => {
				// console.log("newest", res.data.log.comments)
				setLog(res.data.log)
			})

			.catch((error) => console.log(error))
	}, [updatedLog])

	const deleteReview = (e) => {
		e.preventDefault()
		deleteLog(user, log.id)
			.then(console.log("deleted!"))
			.then(() => triggerRefresh())
			.then(navigate("/user"))
	}
	const handleChange = (e) => {
		setComment(e.target.value)
	}
	const postComment = (e) => {
		e.preventDefault()
		addComment(user, log.id, comment)
			.then(setComment(""))
			.then(() => setUpdatedLog((prev) => !prev))
	}

	let card
	let remove
	let comments

	if (log !== null) {
	
		if (user._id === log.author._id) {
			remove = (
				<Button variant="danger" onClick={deleteReview}>
					Delete
				</Button>
			)
		}
		card = (
			<Card style={{ width: "20rem", display:'flex' }} className='mb-2' key={log.id}>
				<Card.Header>
					<Card.Title>
						{log.movieTitle} ({log.releaseYear})<br />
						<small>Directed by: {log.director}</small>
					</Card.Title>
				</Card.Header>
				<Card.Img variant="left" src={`${log.poster}`}></Card.Img>
				<Card.Body>{log.userThoughts}</Card.Body>
				<Card.Body>{log.plot}</Card.Body>
				<Card.Footer>{remove}</Card.Footer>
			</Card>
		)
		// console.log("the log", log)
		comments = log.comments.map((comment, index) => {
			// console.log(comment)
			return (
				<Comment
					key={index}
					comment={comment}
					log={log}
					user={user}
					triggerDelete={() => setUpdatedLog((prev) => !prev)}
				/>
			)
		})
	}
	if (!log) {
		return (
			<Container>
				<Row>
					<Col>
						<Spinner animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					</Col>
				</Row>
			</Container>
		)
	}

	return (
		<Container>
			<Row className="m-3">
				<Col>{card}</Col>
				<Col>
					<h3>Comments</h3>
					<Form onSubmit={postComment}>
						<Form.Group>
							<InputGroup>
								<Form.Control
									placeholder="Add a comment..."
									onChange={handleChange}
									value={comment}
									as="textarea"
									aria-label="With textarea"
									maxLength={140}
									style={{maxHeight:'8rem'}}
								/>
								<Button type="submit" onClick={postComment}>
									Post
								</Button>
							</InputGroup>
						</Form.Group>
					</Form>
					{comments}
				</Col>
			</Row>
		</Container>
	)
}

export default ReviewDetail
