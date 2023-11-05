import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { EmployeePage } from "@/pages/Employees";
import { RegisterEmployeePage } from "@/pages/RegisterEmployee";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <RegisterEmployeePage />,
			},
			{
				path: "/employees",
				element: <EmployeePage />,
			},
		],
	},
]);
