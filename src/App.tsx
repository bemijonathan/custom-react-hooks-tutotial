import React from "react";
import "./App.css";
import DropdownComponent from "./components/dropdownComponent";
import { FetchComponent } from "./components/fetchComponent";
import InputComponent from "./components/inputComponent";



function App() {
	return (
		<div className="App">
			<FetchComponent />
			<InputComponent />
			<DropdownComponent/>
		</div>
	);
}

export default App;
