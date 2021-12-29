import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import WelcomeForm from "./components/WelcomeForm/WelcomeForm";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<AuthPage wrappedComponent={<WelcomeForm />} />}
			/>
			<Route
				path="/auth/login"
				element={<AuthPage wrappedComponent={<LoginForm />} />}
			/>
			<Route
				path="/auth/register"
				element={<AuthPage wrappedComponent={<RegisterForm />} />}
			/>
		</Routes>
	);
}

export default App;
