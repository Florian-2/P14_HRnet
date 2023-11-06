import { useEmployeeContext } from "@/context/employee.context";

export function EmployeePage() {
	const { employeesList } = useEmployeeContext();

	return <code>{JSON.stringify(employeesList)}</code>;
}
