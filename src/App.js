import { useState, Fragment } from "react"
import { Route, Routes } from "react-router"
import { v4 as uuid } from "uuid"

import Header from "./components/shared/Header"
import RequireAuth from "./components/shared/RequireAuth"
import SignIn from "./components/auth/SignIn"
import Home from "./components/Home"
import SignUp from "./components/auth/SignUp"
import ChangePassword from "./components/auth/ChangePassword"
import UserLogs from "./components/UserLogs"
import AddLog from "./components/AddLog"

const App = () => {
	const [user, setUser] = useState(null)

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path="/sign-in" element={<SignIn setUser={setUser} />} />
				<Route path="/sign-up" element={<SignUp setUser={setUser} />} />
				<Route
					path="/user"
					element={
						<RequireAuth user={user}>
							<Home user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/change-password"
					element={
						<RequireAuth user={user}>
							<ChangePassword user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/my-logs"
					element={
						<RequireAuth user={user}>
							<UserLogs user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/add-log"
					element={
						<RequireAuth>
							<AddLog user={user} />
						</RequireAuth>
					}
				/>
			</Routes>
		</Fragment>
	)
}

export default App
