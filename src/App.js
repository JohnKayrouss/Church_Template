import React, { useState, useEffect } from "react";
// import { Provider } from "react-redux";
// import store from "./redux/stroe";
import HeaderNav from "./components/navbar/HeaderNav";
import "./globalStyles.css";

import MainContainer from "./components/MainContainer/MainContainer";

import Contact from "./components/contact/Contact";

function App() {
	return (
		<React.Fragment>
			<HeaderNav />
			<MainContainer />
			<Contact />
		</React.Fragment>
	);
}

export default App;
