import React, { ReactElement } from "react";
import { useDropDown } from "../customHooks/dropdownHook";

export default function dropdownComponent(): ReactElement {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [value, Element] = useDropDown(
		["dog", "cat", "fish"],
		"animals",
		"animal"
	);

	return (
		<div>
			<h1> DROP DOWN HOOK </h1>

			<Element />

			<p> selected value = {value} </p>
		</div>
	);
}
