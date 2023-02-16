import { useState, useEffect } from "react"
import { Modal } from "react-bootstrap"

const ReviewPage = (props) => {
	console.log(props)
	return (
		<Modal show>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Woohoo, you're reading this text in a modal!
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	)
}

export default ReviewPage
