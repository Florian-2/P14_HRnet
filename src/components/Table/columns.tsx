import { Employee } from "@/interfaces";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { DataTableColumnHeader } from "./column-header";
import { DataTableRowActions } from "./actions-row";

function formatDate(date: string | Date) {
	const startDate = new Date(date);
	return format(startDate, "yyyy/MM/dd");
}

export const columns: ColumnDef<Employee>[] = [
	{
		accessorKey: "firstname",
		id: "First Name",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="First Name"
			/>
		),
	},
	{
		accessorKey: "lastname",
		id: "Last name",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Last Name"
			/>
		),
	},
	{
		accessorKey: "startDate",
		id: "Start Date",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Start Date"
			/>
		),
		cell: ({ row }) => <div>{formatDate(row.getValue<string>("Start Date"))}</div>,
	},
	{
		accessorKey: "department",
		id: "Department",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Department"
			/>
		),
	},
	{
		accessorKey: "birthDays",
		id: "Date of Birth",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Date of Birth"
			/>
		),
		cell: ({ row }) => <div>{formatDate(row.getValue<string>("Date of Birth"))}</div>,
	},
	{
		accessorKey: "street",
		id: "Sreet",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Street"
			/>
		),
	},
	{
		accessorKey: "city",
		id: "City",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="City"
			/>
		),
	},
	{
		accessorKey: "state",
		id: "State",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="State"
			/>
		),
	},
	{
		accessorKey: "zipCode",
		id: "Zip Code",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Zip Code"
			/>
		),
	},
	{
		id: "actions",
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
];
