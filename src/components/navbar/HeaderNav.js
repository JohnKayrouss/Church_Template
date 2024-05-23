import React, { useRef, useState } from "react";
import "./HeaderNav.css";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../utilities/Logo_5.png";
// import { translatationWrapper } from "../../translationWrapper/translationWrapper";

const HeaderNav = () => {
	const navigate = useNavigate();
	const [isHome, setIsHome] = useState(false);
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
		setIsHome(true);
	};
	const navPageClickHandler = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	const navPages = [
		{ url: "images", urlName: `gallery` },
		{ url: "ministries", urlName: `ministries` },
		{ url: "aboutus", urlName: `aboutUs` },
		{ url: "faq", urlName: `FAQ` },
	];
	const logoHandler = () => {
		navigate("/");
	};
	return (
		<header className='navContainer'>
			<div onClick={logoHandler} className='navLink__logo '>
				<img src={logo} alt='' />
			</div>
			<nav ref={navRef}>
				{isHome && (
					<Link
						to={"/"}
						className='navLink '
						onClick={navPageClickHandler}></Link>
				)}
				{navPages.map((page, idx) => (
					<Link
						key={idx}
						to={page.url}
						className='navLink'
						onClick={navPageClickHandler}>
						{page.urlName}
					</Link>
				))}
				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
};

export default HeaderNav;
