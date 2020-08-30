import React, { useState, useEffect } from "react";
import { useFetchHook } from "../customHooks/useFetchHook";

export const FetchComponent: React.FC = () => {
	const [body, setBody] = useState({});
	let [data, loading, error, run] = useFetchHook(body);

	useEffect(() => {
		run("https://jsonplaceholder.typicode.com/todos/1", "get");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h1> My First Custom Fetch Hook </h1>
			{loading
				? "loading...."
				: error
				? "an error ocurred"
				: JSON.stringify(data).slice(0, 100)}

			<form
				onSubmit={(e) => {
					e.preventDefault();
					run("https://jsonplaceholder.typicode.com/todos", "post");
				}}
			>
				<input
					placeholder="boody"
					onInput={(e: any) => setBody({ data: e.target.value })}
				/>
				<button className="button" type="submit">
					Fetch Resources
				</button>
			</form>
		</>
	);
};
