import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl } from "../ui/form";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { SelectOption } from "@/interfaces";

type Props = {
	onChange: () => void;
	placeholder?: string;
	defaultValue?: string;
	options: SelectOption[];
};

export function SelectState({ onChange, defaultValue, placeholder, options }: Props) {
	return (
		<Select
			onValueChange={onChange}
			defaultValue={defaultValue}
		>
			<FormControl>
				<SelectTrigger>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
			</FormControl>

			<SelectContent>
				<ScrollArea className="max-h-80 overflow-auto">
					{options.map(({ label, value }, i) => (
						<SelectItem
							key={i}
							value={value}
						>
							{label}
						</SelectItem>
					))}
				</ScrollArea>
			</SelectContent>
		</Select>
	);
}
