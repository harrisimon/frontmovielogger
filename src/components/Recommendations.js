import { useState, useEffect } from "react"
import axios from "axios"

const getMoreByActor = (query) => {
	return axios.get(
		`https://api.themoviedb.org/3/search/person?api_key=a0900a4fc790e96b93869d26be959346&language=en-US&query=${query}&page=1&include_adult=false`
	)
}
const Recommendations = (props) => {
	const [actors, setActors] = useState(null)
	const [actorFav, setActorFav] = useState("")
	const [recommendation, setRecommendation] = useState(null)
	console.log(props)
	const { userLogs } = props
	useEffect(() => {
		let actors = {}

		if (userLogs !== null && userLogs.length > 4) {
			userLogs.map((log) => {
				log.actors.forEach(
					(actor) => (actors[actor] = (actors[actor] || 0) + 1)
				)
			})
			setActors(actors)
			let mostWatched = Object.keys(actors).reduce((a, b) =>
				actors[a] > actors[b] ? a : b
			)
			setActorFav(mostWatched)
			let titles
			let titleList = []
			console.log(mostWatched)
			console.log(actors)
			getMoreByActor(mostWatched).then((res) => {
				titles = res.data.results[0].known_for
				titles.forEach((rec) => titleList.push(rec.title))
				setRecommendation(titleList)
			})
		}
	}, [userLogs])

	let show
	let recLine
	if (recommendation !== null) {
		show = recommendation.map((rec, index) => {
			return <div key={index}>{rec}</div>
		})
	}
	if (actorFav !== "") {
		recLine = <div>Because you enjoyed movies with {actorFav}</div>
	}
	return (
		<div>
			{" "}
			{recLine}
			<div>{show}</div>
		</div>
	)
}
export default Recommendations
