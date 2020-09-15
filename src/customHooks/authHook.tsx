import React, { useState, useEffect } from "react";

const Loading = () => <h2>Loading....</h2>;

const notAuthenticated = () => <h2>notAuthenticated....</h2>;

const decoded = (token: string) => {
	const x = Math.random();
	if (x > 0.5) return { expired: false };
	else return { expired: true };
};

export const authHook = (component: React.FC) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [compoenent, setComponent] = useState<React.FC>(Loading);

	const isAuthenticated = () => {
		const token: string | null = localStorage.getItem("auth-token");
		console.log("ff");
		if (token) {
			if (decoded(token as string).expired) {
				setComponent(notAuthenticated);
			} else {
				setComponent(component);
			}
		} else setComponent(notAuthenticated);
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		isAuthenticated();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [compoenent];
};
