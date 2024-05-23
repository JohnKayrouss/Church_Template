import React, { useEffect } from "react";
import homeContentCss from "./HomeContent.module.css";
import HomeAboutUsSection from "./HomeAboutUsSection";
import HomeFAQ from "./HomeFAQ";
import HomeMeetings from "./HomeMeetings";
import GalleryContainer from "./GalleryContainer";

const HomeContent = () => {
	return (
		<React.Fragment>
			<div className={homeContentCss.container}>
				<HomeMeetings />
				<GalleryContainer />
				<HomeAboutUsSection />
				<HomeFAQ />
			</div>
		</React.Fragment>
	);
};

export default HomeContent;
