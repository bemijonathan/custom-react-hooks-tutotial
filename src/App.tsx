import React from "react";
import "./App.css";
import { FetchComponent } from "./components/fetchComponent";
import InputComponent from "./components/inputComponent";

function App() {
	return (
		<div className="App">
			<FetchComponent />
			<InputComponent />
		</div>
	);
}

export default App;
