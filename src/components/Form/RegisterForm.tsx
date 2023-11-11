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
import { Employee } from "@/interfaces";

type Props = {
	stateEmployee?: Employee;
};

export type FormSchemaType = z.infer<typeof formSchema>;

export function RegisterForm({ stateEmployee }: Props) {
	const form = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: stateEmployee?.firstname || "",
			lastname: stateEmployee?.lastname || "",
			street: stateEmployee?.street || "",
			city: stateEmployee?.city || "",
			zipCode: stateEmployee?.zipCode || "",
			department: stateEmployee?.department || "",
			state: stateEmployee?.state || "",
			birthDays: stateEmployee?.birthDays ? new Date(stateEmployee.birthDays) : undefined,
			startDate: stateEmployee?.startDate ? new Date(stateEmployee.startDate) : undefined,
		},
	});
	const { control, handleSubmit, formState } = form;

	const { editEmployee, addEmployee } = useEmployeeContext();

	function onSubmit(data: FormSchemaType) {
		if (stateEmployee) {
			return editEmployee({ id: stateEmployee.id, ...data });
		}

		const employee = { id: crypto.randomUUID(), ...data };
		addEmployee(employee);
	}

	return (
		<section className="h-full flex flex-col gap-6 justify-center items-center mb-5 sm:gap-8 sm:-mt-14">
			<h1 className="font-medium text-2xl">{stateEmployee ? "Edit" : "Register"} employee</h1>

			<Form {...form}>
				<div className="max-w-5xl w-full p-7 border rounded-md">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-6 sm:flex-row"
					>
						<div className="flex-grow space-y-3">
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

							<FormField
								control={control}
								name="department"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Department</FormLabel>

										<FormControl>
											<SelectState
												onChange={field.onChange}
												defaultValue={field.value}
												placeholder="Select a department"
												options={departmentOptions}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<fieldset className="flex-grow p-7 space-y-3 border rounded-md">
							<legend className="px-2 text-center font-medium">Postal address</legend>

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
												defaultValue={field.value}
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
					</form>
				</div>

				<Button
					type="submit"
					onClick={handleSubmit(onSubmit)}
					disabled={formState.isSubmitting}
					className="px-10 text-base"
				>
					{formState.isSubmitting ? "Loading..." : "Submit"}
				</Button>
			</Form>
		</section>
	);
}
