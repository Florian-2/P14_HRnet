import { RegisterForm } from "@/components/Form/RegisterForm";
import { useLocation } from "react-router-dom";

export function RegisterEmployeePage() {
	const location = useLocation();

	if (location.state?.employee) {
		return <RegisterForm stateEmployee={location.state.employee} />;
	}

	return <RegisterForm />;
}
