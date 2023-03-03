import { deleteComment } from "../api/logs"
import { Button, Figure } from "react-bootstrap"

const Comment = (props) => {
	// console.log(props)
	const { comment, log, user, triggerDelete } = props

	const handleDelete = () => {
		deleteComment(user, log._id, comment._id)
			.then(
				setTimeout(() => {
					triggerDelete()
				}, 100)
			)
			.catch((error) => console.log(error))
	}
	let button
	if (user._id === comment.author._id || user._id === log.author._id) {
		button = (
			<Button
				variant="danger"
				className="d-flex justify-content-end"
				onClick={() => handleDelete()}
			>
				Delete
			</Button>
		)
	}
	const date = new Date(comment.createdAt)

	return (
		<Figure
			key={comment._id}
			className="m-2"
			style={{
				width: "18rem",
				wordWrap: "break-word",
				backgroundColor: "lightGrey",
				padding: "8px",
				borderRadius: "3px",
			}}
		>
			<p>{comment.note}</p>
			<span>
				<small>
					Posted by: {comment.author.email} <br />
					{date.toLocaleString("en-US")}
				</small>
				<div className="d-flex justify-content-end">{button}</div>
			</span>
		</Figure>
	)
}

export default Comment
