import { Header } from "./layouts/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Header />

			<main className="max-w-screen-2xl">
				<Outlet />
			</main>
		</>
	);
}

export default App;
