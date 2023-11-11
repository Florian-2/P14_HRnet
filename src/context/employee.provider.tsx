import { Employee } from "@/interfaces";
import { ReactNode, createContext, useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

type EmployeeContext = {
	employeesList: Employee[];
	addEmployee: (data: Employee) => void;
	editEmployee: (data: Employee) => void;
	deleteEmployee: (id: string) => void;
};

export const EmployeeContext = createContext<EmployeeContext | null>(null);

export function EmployeeProvider({ children }: { children: ReactNode }) {
	const [employeesList, setEmployeesList] = useLocalStorage<Employee[]>("employees", []);

	const addEmployee = useCallback(
		(data: Employee) => {
			const listEmployees = [...employeesList, data];
			setEmployeesList(listEmployees);
		},
		[employeesList, setEmployeesList]
	);

	const editEmployee = useCallback(
		(data: Employee) => {
			const updatedEmployeesList = [...employeesList];

			const index = updatedEmployeesList.findIndex((employee) => employee.id === data.id);

			if (index === -1) {
				return console.warn("Modification failed");
			}

			updatedEmployeesList[index] = { ...updatedEmployeesList[index], ...data };
			setEmployeesList(updatedEmployeesList);
		},
		[employeesList, setEmployeesList]
	);

	const deleteEmployee = useCallback(
		(id: string) => {
			const listEmployees = employeesList.filter((employee) => employee.id !== id);
			setEmployeesList(listEmployees);
		},
		[employeesList, setEmployeesList]
	);

	return (
		<EmployeeContext.Provider value={{ employeesList, addEmployee, editEmployee, deleteEmployee }}>
			{children}
		</EmployeeContext.Provider>
	);
}
