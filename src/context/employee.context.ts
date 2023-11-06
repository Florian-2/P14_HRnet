import { useContext } from "react";
import { EmployeeContext } from "./employee.provider";

export function useEmployeeContext() {
	const context = useContext(EmployeeContext);

	if (!context) {
		throw new Error("Provider undefined");
	}

	return context;
}
