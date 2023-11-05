import { subYears } from "date-fns";
import * as z from "zod";

export const formSchema = z.object({
	firstname: z.string().min(2).max(70),
	lastname: z.string().min(2).max(70),
	birthDays: z.date().max(subYears(new Date(), 10), { message: "too young" }),
	startDate: z.date(),
	street: z.string().min(4),
	city: z.string().min(2),
	state: z.string().length(2),
	zipCode: z.string(),
	department: z.string(),
});
