import { MoreHorizontal } from "lucide-react";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Employee } from "@/interfaces";
import { useEmployeeContext } from "@/context/employee.context";
import { useCopyToClipboard } from "usehooks-ts";
import { Link } from "react-router-dom";

type DataTableRowActionsProps = {
	row: Row<Employee>;
};

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
	const { deleteEmployee } = useEmployeeContext();
	const [, copy] = useCopyToClipboard();

	async function handleCopy() {
		try {
			const res = await copy(JSON.stringify(row.original));

			if (!res) {
				throw new Error("Copy failure");
			}
		} catch (error) {
			console.warn(error);
		}
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
				>
					<MoreHorizontal className="h-4 w-4" />
					<span className="sr-only">Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="w-[160px]"
			>
				<DropdownMenuItem asChild>
					<Link
						to="/"
						state={{ employee: row.original }}
					>
						Edit
					</Link>
				</DropdownMenuItem>

				{navigator.clipboard && <DropdownMenuItem onClick={handleCopy}>Copy row (JSON)</DropdownMenuItem>}

				<DropdownMenuSeparator />

				<DropdownMenuItem
					onClick={() => deleteEmployee(row.original.id)}
					className="focus:bg-destructive/80"
				>
					Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
