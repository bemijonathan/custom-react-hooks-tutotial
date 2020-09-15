import React, { ReactElement } from "react";
import { UseInput } from "../customHooks/useInputHook";

export default function inputComponent(): ReactElement {
	let [name, NameInput] = UseInput("string", "name", "John Doe");
	let [email, EmailInput] = UseInput("email", "email", "Jonathan@gmail.com");
	let [password, PasswordInput] = UseInput("password", "password", "test");

	return (
		<div>
			<h1>CUSTOM INPUT HOOK</h1>
			{/* {name} */}
			<div>{NameInput}</div>
			<div>{EmailInput} </div>
			<div> {PasswordInput} </div>
			<button onClick={() => console.log({ name, email, password })}>
				Submit
			</button>
		</div>
	);
}
