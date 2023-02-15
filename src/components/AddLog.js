import { useState, useEffect } from "react"
import { Form, Container, Button, InputGroup } from "react-bootstrap"
import axios from "axios"
const AddLog = () => {
	const [query, setQuery] = useState("")
	const [results, setResults] = useState([])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
	const searchQuery = async (query) => {
		const res = await axios.get(`http://www.omdbapi.com/?apikey=764389f4&i&s=${query}&plot=full`)
        console.log(res.data)
	}

	return (
		<div>
			<Container>
				<h1>Add a post</h1>
				<Form onSubmit={searchQuery}>
					<InputGroup>
						<Form.Control
							size="large"
							placeholder="Enter movie title..."
                            value={query}
                            onChange={handleChange}
						/>
						<Button variant="primary" onClick={()=>searchQuery(query)}>Search</Button>
					</InputGroup>
				</Form>
			</Container>
		</div>
	)
}

export default AddLog
