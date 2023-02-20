import { useState, useEffect } from "react"

const Recommendations = (props) => {
	const [actors, setActors] = useState(null)
	console.log(props)
	const { userLogs } = props
	useEffect(() => {
		let actors = {}
		if (userLogs) {
			userLogs.map((log) => {
				log.actors.forEach(
					(actor) => (actors[actor] = (actors[actor] || 0) + 1)
				)
			})
		}
        setActors(actors)
		console.log("ue", actors)
	}, [])

	return <div>recommendation</div>
}
export default Recommendations
