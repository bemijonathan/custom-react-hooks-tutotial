import React from "react";
import { authHook } from "../customHooks/authHook";

export default function componentName() {
	const Profile = () => (
		<div>
			<h1>Jonathan</h1>
			<p> Software Engineer</p>
		</div>
	);

	const [UserProfile] = authHook(Profile);
	console.log(UserProfile);

	return <>{UserProfile}</>;
}
