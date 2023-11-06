import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/shared/validator/register";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { SimpleField } from "./SimpleField";
import { DatePicker } from "./DatePicker";
import { SelectState } from "./SelectState";
import { subYears, addYears } from "date-fns";
import { statesOptions } from "@/shared/data/states";
import { departmentOptions } from "@/shared/data/department";
import { useEmployeeContext } from "@/context/employee.context";

export type FormSchemaType = z.infer<typeof formSchema>;

export function RegisterForm() {
	const form = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: "John",
			lastname: "Doe",
			street: "39 rue Desaix",
			city: "Paris",
			zipCode: "75015",
		},
	});
	const { control, handleSubmit, formState } = form;

	const { addEmployee } = useEmployeeContext();

	function onSubmit(data: FormSchemaType) {
		const employee = { id: crypto.randomUUID(), ...data };
		addEmployee(employee);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="space-y-8"
			>
				<FormField
					control={control}
					name="firstname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Firstname</FormLabel>

							<FormControl>
								<Input {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="lastname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Lastname</FormLabel>

							<FormControl>
								<Input {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="birthDays"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Date of Birth</FormLabel>

							<DatePicker
								onChange={field.onChange}
								value={field.value}
								toYears={subYears(new Date(), 15).getFullYear()}
							/>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="startDate"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Start Date</FormLabel>

							<DatePicker
								onChange={field.onChange}
								value={field.value}
								toYears={addYears(new Date(), 2).getFullYear()}
							/>
							<FormMessage />
						</FormItem>
					)}
				/>

				<fieldset className="p-5 space-y-3 border rounded-md">
					<legend className="px-1 text-center font-medium">Postal address</legend>

					<FormField
						control={control}
						name="street"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Address</FormLabel>

								<FormControl>
									<Input {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name="city"
						render={({ field }) => (
							<FormItem>
								<FormLabel>City</FormLabel>

								<FormControl>
									<Input {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name="state"
						render={({ field }) => (
							<FormItem defaultValue={statesOptions[0].value}>
								<FormLabel>State</FormLabel>

								<FormControl>
									<SelectState
										onChange={field.onChange}
										placeholder="Select a state"
										options={statesOptions}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name="zipCode"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Zip Code</FormLabel>

								<FormControl>
									<Input
										type="number"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</fieldset>

				<FormField
					control={control}
					name="department"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Department</FormLabel>

							<FormControl>
								<SelectState
									onChange={field.onChange}
									placeholder="Select a department"
									options={departmentOptions}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					onClick={handleSubmit(onSubmit)}
					disabled={formState.isSubmitting}
				>
					{formState.isSubmitting ? "Loading..." : "Submit"}
				</Button>
			</form>
		</Form>
	);
}
