import React, { useState } from "react";

const Loading = () => {
	return (
		<div>
			<h2>Loading....</h2>
		</div>
	);
};

const notAuthenticated = () => <h2>notAuthenticated....</h2>;

const decoded = (token: string) => {
	const x = Math.random();
	if (x > 0.5) return { expired: false };
	else return { expired: true };
};

export const authHook = (component: JSX.Element) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [compoenent, setComponent] = useState(Loading);

	const isAuthenticated = async () => {
		const token: string | null = await localStorage.getItem("auth-token");

		if (decoded(token as string).expired) {
			setComponent(notAuthenticated);
		} else {
			setComponent(component);
		}
	};

	isAuthenticated();

	return compoenent;
};
