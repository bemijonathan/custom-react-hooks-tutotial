import { useState } from "react";

export type HTTPmethods = "put" | "patch" | "post" | "get" | "Delete";

export const useFetchHook = <T,>(
	body?: any
): [
	T | T[],
	boolean,
	boolean,
	(url: string, method: HTTPmethods) => Promise<any>
] => {
	const [data, setData] = useState<T | T[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const fetchResourse = async (url: string, method: HTTPmethods) => {
		if (url.length) {
			setLoading(true);
			try {
				let response;
				switch (method) {
					case "get":
						response = await fetch(url);
						break;
					default:
						response = await fetch(url, {
							method: method,
							body,
						});

						break;
				}
				console.log("response", body, method);
				let d: T | T[] = await response.json();
				setData(d);
			} catch (error) {
				console.log(error);
				setError(true);
			} finally {
				setLoading(false);
			}
			return data;
		}
	};

	return [data, loading, error, fetchResourse];
};
