import { deleteComment } from "../api/logs"
import { Button } from "react-bootstrap"

const Comment = (props) => {
	// console.log(props)
	const { comment, log, user, triggerDelete } = props
	// console.log(props, "in component")
	const handleDelete = () => {
		deleteComment(user, log._id, comment._id)
			.then(setTimeout(()=>{triggerDelete()},200))
			.catch((error) => console.log(error))
	}

	return (
		<div key={comment._id}>
			<h1>{comment.note}</h1>
			<p>{comment.author.email}</p>
			<Button variant="danger" onClick={() => handleDelete()}>
				Delete
			</Button>
		</div>
	)
}

export default Comment
