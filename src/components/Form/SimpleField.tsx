/*
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { FormSchemaType } from "./RegisterForm";

type Props = {
	form: UseFormReturn<FormSchemaType>;
	label: string;
	field: ControllerRenderProps<FormSchemaType, keyof FormSchemaType>;
	type?: "text" | "number" | "email" | "passsword";
	placeholder?: string;
	name: keyof FormSchemaType;
};

export function SimpleField({ form, label, type = "text", name, placeholder }: Props) {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>

					<FormControl>
						<Input
							type={type}
							placeholder={placeholder}
							{...field}
						/>
					</FormControl>

					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
*/
