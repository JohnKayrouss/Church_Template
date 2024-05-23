import React, { useState, useEffect } from "react";
import aboutUsCss from "./AboutUsContainer.module.css";
import { sideMenu } from "./AboutUsText";
import Aos from "aos";

const AboutUsContainer = () => {
	const [index, setIndex] = useState(0);

	const sideMenuHandler = (Itemindex) => {
		setIndex(Itemindex);
	};
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<React.Fragment>
			<div className={aboutUsCss.container}>
				<div className={aboutUsCss.sideMenuContainer}>
					<div className={aboutUsCss.sideMenuItems}>
						{sideMenu.map((item, Itemindex) => (
							<div key={item.itemName}>
								<button
									className={aboutUsCss.sideMenuItem}
									onClick={() => sideMenuHandler(Itemindex)}>
									{item.itemName}
								</button>
							</div>
						))}
					</div>
				</div>
				<div
					className={aboutUsCss.aboutUsContentContainer}
					data-aos='fade-up'
					data-aos-duration='5000'
					data-aos-delay='300'
					data-aos-easing='ease-in-sine'>
					<div>{sideMenu[index].itemContent}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AboutUsContainer;

// onClick={() => sideMenuHandler()}
