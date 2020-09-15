import React, { useState } from "react";

export const useDropDown = (list: string[], label: string, name: string) => {
	const [selected, setSelected] = useState("");
	const dropDownHTML = () => (
		<div>
			<label htmlFor={name}>{label}</label>
			<br />
			<select
				name={name}
				onChange={(e) => {
					setSelected(e.target.value);
				}}
				value={selected}
			>
				<option disabled={true} value="">
					Select Option
				</option>
				{list.map((e, i) => {
					return (
						<option key={e + i} value={e}>
							{e}
						</option>
					);
				})}
			</select>
		</div>
	);

	return [selected, dropDownHTML];
};
