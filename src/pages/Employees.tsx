import { columns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import { useEmployeeContext } from "@/context/employee.context";

export function EmployeePage() {
	const { employeesList } = useEmployeeContext();

	return (
		<DataTable
			columns={columns}
			data={employeesList}
		/>
	);
}
