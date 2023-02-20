import "./index.css"
import { useState, Fragment, useEffect } from "react"
import { Route, Routes } from "react-router"
import { v4 as uuid } from "uuid"
import { getMyLogs, getLogs } from "./api/logs"
import Header from "./components/shared/Header"
import RequireAuth from "./components/shared/RequireAuth"
import SignIn from "./components/auth/SignIn"
import Home from "./pages/Home"
import SignUp from "./components/auth/SignUp"
import ChangePassword from "./components/auth/ChangePassword"
import UserLogs from "./components/UserLogs"
import AddLog from "./components/AddLog"
import ReviewPage from "./components/ReviewPage"
import ReviewDetail from "./components/ReviewDetail"

const App = () => {
	const [user, setUser] = useState(null)
	const [userLogs, setUserLogs] = useState(null)
	const [allLogs, setAllLogs] = useState(null)

	useEffect(() => {
		if (user !== null) {
			getMyLogs(user).then((res) => {
				setUserLogs(res.data.logs.reverse())})
				getLogs(user).then((res) => {
					setAllLogs(res.data.logs)
				})
		}
		console.log(userLogs, "in app")
		console.log(allLogs, "in app")
	}, [user])

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
							<UserLogs user={user} logs={userLogs} />
						</RequireAuth>
					}
				/>
				<Route
					path="/search"
					element={
						<RequireAuth user={user}>
							<AddLog user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/reviews/:id"
					element={
						<RequireAuth user={user}>
							<ReviewDetail user={user} />
						</RequireAuth>
					}
				/>
				<Route path="/" />
			</Routes>
		</Fragment>
	)
}

export default App
