import { RegisterForm } from "@/components/Form/RegisterForm";
import { useLocation } from "react-router-dom";

export function RegisterEmployeePage() {
	const location = useLocation();

	return (
		<RegisterForm
			stateEmployee={location.state?.employee}
			key={location.state?.employee ? "edit" : "register"}
		/>
	);
}
