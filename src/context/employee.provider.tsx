import { Employee } from "@/interfaces";
import { ReactNode, createContext, useCallback, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

type EmployeeContext = {
	employeesList: Employee[];
	addEmployee: (data: Employee) => void;
	removeEmployee: (id: string) => void;
};

export const EmployeeContext = createContext<EmployeeContext | null>(null);

export function EmployeeProvider({ children }: { children: ReactNode }) {
	const [employeesStorage, setEmployeesStorage] = useLocalStorage<Employee[]>("employees", []);
	const [employeesList, setEmployeesList] = useState<Employee[]>(employeesStorage);

	const addEmployee = useCallback(
		(data: Employee) => {
			const list = [...employeesList, data];
			setEmployeesList(list);
			setEmployeesStorage(list);
		},
		[employeesList, setEmployeesStorage]
	);

	function removeEmployee(id: string) {
		setEmployeesList(employeesList.filter((employee) => employee.id !== id));
	}

	return (
		<EmployeeContext.Provider value={{ employeesList, addEmployee, removeEmployee }}>
			{children}
		</EmployeeContext.Provider>
	);
}
