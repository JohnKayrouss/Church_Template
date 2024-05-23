import React from "react";
import HomeContent from "../home/HomeContent";
import MainContainerCss from "./MainContainer.module.css";
import { Route, Routes } from "react-router-dom";

//pages
import AboutUs from "../../pages/AboutUs";
import Ministries from "../../pages/Ministries";
import Images from "../../pages/Images";
import Home from "../../pages/Home";
import FAQContainer from "../FAQ/FAQContainer";
const MainContainer = () => {
	const navigation = [
		{ path: "/", component: <Home /> },
		{ path: "aboutus", component: <AboutUs /> },
		{ path: "ministries", component: <Ministries /> },
		{ path: "images", component: <Images /> },
		{ path: "faq", component: <FAQContainer /> },
	];
	return (
		<div className={MainContainerCss.container}>
			<Routes>
				{navigation.map((route) => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={route.component}
						/>
					);
				})}
			</Routes>
		</div>
	);
};

export default MainContainer;
