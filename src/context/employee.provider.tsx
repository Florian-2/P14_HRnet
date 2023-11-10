import { Employee } from "@/interfaces";
import { ReactNode, createContext, useCallback, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

type EmployeeContext = {
	employeesList: Employee[];
	addEmployee: (data: Employee) => void;
	deleteEmployee: (id: string) => void;
};

export const EmployeeContext = createContext<EmployeeContext | null>(null);

export function EmployeeProvider({ children }: { children: ReactNode }) {
	const [employeesStorage, setEmployeesStorage] = useLocalStorage<Employee[]>("employees", []);
	const [employeesList, setEmployeesList] = useState<Employee[]>(employeesStorage);

	const addEmployee = useCallback(
		(data: Employee) => {
			const listEmployees = [...employeesList, data];
			setEmployeesList(listEmployees);
			setEmployeesStorage(listEmployees);
		},
		[employeesList, setEmployeesStorage]
	);

	const deleteEmployee = useCallback(
		(id: string) => {
			const listEmployees = employeesList.filter((employee) => employee.id !== id);
			setEmployeesList(listEmployees);
			setEmployeesStorage(listEmployees);
		},
		[employeesList, setEmployeesStorage]
	);

	return (
		<EmployeeContext.Provider value={{ employeesList, addEmployee, deleteEmployee }}>
			{children}
		</EmployeeContext.Provider>
	);
}
