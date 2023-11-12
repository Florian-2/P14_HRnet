import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { CalendarIcon } from "lucide-react";

type Props = {
	onChange: () => void;
	value?: Date;
	defaultDate?: Date;
	fromYear?: number;
	toYears?: number;
};

const toYearsDefault = new Date().getFullYear();

export function DatePicker({ onChange, value, defaultDate, fromYear = 1940, toYears = toYearsDefault }: Props) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<FormControl>
					<Button
						variant={"outline"}
						className={cn("w-full justify-start text-left font-normal", !value && "text-muted-foreground")}
					>
						{value && format(value, "yyyy/MM/dd")}
						<CalendarIcon className="ml-auto h-4 w-4" />
					</Button>
				</FormControl>
			</PopoverTrigger>

			<PopoverContent
				// align="start"
				className="w-auto p-0"
			>
				<Calendar
					mode="single"
					captionLayout="dropdown-buttons"
					defaultMonth={defaultDate}
					selected={value}
					onSelect={onChange}
					fromYear={fromYear}
					toYear={toYears}
				/>
			</PopoverContent>
		</Popover>
	);
}
