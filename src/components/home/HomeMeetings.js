import React, { useEffect } from "react";
import meetingCss from "./HomeMeetings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { meetingCard } from "./Text";

const HomeMeetings = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className={meetingCss.meetingsContainer} data-aos='flip-right'>
			<div
				data-aos='zoom-in-up'
				data-aos-duration='2000'
				data-aos-delay='300'
				data-aos-easing='ease-in-sine'>
				<div className={meetingCss.meetingsHeaderBox}>
					<FontAwesomeIcon
						icon={faChurch}
						className={meetingCss.meetingsHeaderIcon}
					/>
					<h1 className={meetingCss.meetingsH1}>Church Meetings</h1>
					<h3 className={meetingCss.meetingsH3}>Weekly Meeting Schedule</h3>
				</div>
			</div>
			<div className={meetingCss.meetingsContentBox} data-aos='fade-up'>
				{meetingCard.map((card, index) => (
					<div className={meetingCss.meetingsContentCard} key={index}>
						<FontAwesomeIcon
							icon={faCalendarWeek}
							className={meetingCss.meetingsCardIcon}
						/>
						<div className={meetingCss.meetingCardHeader}>
							<h2 className={meetingCss.meetingCardHeaderH2}>
								{card.meetingHeader}
							</h2>
						</div>
						<div className={meetingCss.meetingCardText}>
							<h4 className={meetingCss.meetingCardHeaderH4}>
								{card.meetingContent}
							</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeMeetings;
