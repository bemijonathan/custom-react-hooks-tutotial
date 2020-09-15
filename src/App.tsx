import React from "react";
import "./App.css";
import DropdownComponent from "./components/dropdownComponent";
import { FetchComponent } from "./components/fetchComponent";
import InputComponent from "./components/inputComponent";
import AuthComponent from "./components/authComponent";

function App() {
	return (
		<div className="App">
			<FetchComponent />
			<InputComponent />
			<DropdownComponent />
			<AuthComponent />
		</div>
	);
}

export default App;
