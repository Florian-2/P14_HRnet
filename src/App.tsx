import { EmployeeProvider } from "./context/employee.provider";
import { Header } from "./layouts/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Header />

			<main className="max-w-screen-2xl mx-auto">
				<EmployeeProvider>
					<Outlet />
				</EmployeeProvider>
			</main>
		</>
	);
}

export default App;
