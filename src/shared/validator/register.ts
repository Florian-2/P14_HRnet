import { subYears } from "date-fns";
import * as z from "zod";

const ERROR_FIRSTNAME = "First name must contain at least 2 characters";
const ERROR_LASTNAME = "Last name must contain at least 2 characters";
const ERROR_BIRTHDAY = "Date of birth required";
const ERROR_STARTDATE = "Date of birth required";
const ERROR_STREET = "Address must contain at least 4 characters";
const ERROR_CITY = "City contain at least 2 characters";
const ERROR_STATE = "Select a state";
const ERROR_ZIPCODE = "Zip code must contain at least 2 characters";
const ERROR_DEPARTMENT = "Select a department";

export const formSchema = z.object({
	firstname: z.string().min(2, { message: ERROR_FIRSTNAME }).max(70),
	lastname: z.string().min(2, { message: ERROR_LASTNAME }).max(70),
	birthDay: z.date({ required_error: ERROR_BIRTHDAY }).max(subYears(new Date(), 10), { message: "too young" }),
	startDate: z.date({ required_error: ERROR_STARTDATE }),
	street: z.string().min(4, { message: ERROR_STREET }),
	city: z.string().min(2, { message: ERROR_CITY }),
	state: z.string().length(2, { message: ERROR_STATE }),
	zipCode: z.string().min(2, { message: ERROR_ZIPCODE }),
	department: z.string().length(1, { message: ERROR_DEPARTMENT }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
