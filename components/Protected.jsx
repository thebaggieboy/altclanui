import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { useRouter } from "next/router";

const Protected = ({ children }) => {
	const user = null;
	const router = useRouter();

	if (user === null) {
		router.push("/accounts/signup");
		return;
	}

	return <>{children}</>;
};

export default Protected;
