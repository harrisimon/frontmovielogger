import { useState, Fragment } from "react"
import { Route, Routes } from "react-router"
import { v4 as uuid } from "uuid"

import Header from "./components/shared/Header"
import RequireAuth from "./components/shared/RequireAuth"
import SignIn from "./components/auth/SignIn"
import Home from "./components/Home"

const App = () => {
	const [user, setUser] = useState(null)

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path="/sign-in" element={<SignIn setUser={setUser} />} />
				<Route
					path="/user"
					element={
						<RequireAuth user={user}>
							<Home user={user}  />
						</RequireAuth>
					}
				/>
			</Routes>
		</Fragment>
	)
}

export default App
