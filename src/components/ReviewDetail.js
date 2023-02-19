import { useState, useEffect } from "react"
import { getLog } from "../api/logs"
import { useParams } from "react-router"
import { Container } from "react-bootstrap"

const ReviewDetail = (props) => {
	const [log, setLog] = useState(null)
	const { user } = props
	const { id } = useParams()
	useEffect(() => {
		getLog(user, id).then((res) => {
			setLog(res.data.log)
            console.log("the res",res.data.log)
		})
	}, [])
    
	let image
	if (log !== null) {
        console.log("the poster",log.poster)
		image =  <div>
            <img src={`${log.poster}`} alt='poster' />
            </div>
	}

	return <Container>{image}</Container>
}

export default ReviewDetail
