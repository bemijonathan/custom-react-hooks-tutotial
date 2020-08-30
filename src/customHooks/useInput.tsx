import React, { useState } from "react";

export const UseInput = (type: string, label: string, placeholder: string) => {
	const [value, setValue] = useState<string>("");

	const InputHTML = () => {
		return (
			<>
				<label> {label} </label>
				<br />
				<br />
				<input
					type={type}
					placeholder={placeholder}
					onInput={(e: any) => setValue(e.target.value)}
				/>
			</>
		);
	};

	return [value, InputHTML()];
};
