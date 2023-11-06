import { EmployeeProvider } from "./context/employee.provider";
import { Header } from "./layouts/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Header />

			<main className="flex-grow">
				<EmployeeProvider>
					<Outlet />
				</EmployeeProvider>
			</main>
		</>
	);
}

export default App;
