import React, { useState, useEffect } from "react";
import homeFAQCss from "./HomeFAQ.module.css";
import FAQImg from "../../utilities/coding_2.avif";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import { FAQCardText } from "./Text";
import Aos from "aos";
import "aos/dist/aos.css";
const HomeFAQ = () => {
	const [popupCard, setPopupCard] = useState(false);
	const [clickedCardIndex, setClickedCardIndex] = useState(null);

	const cardPopupHandler = (index) => {
		setPopupCard(true);
		setClickedCardIndex(index);
	};
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<React.Fragment>
			<div className={homeFAQCss.FAQContainer} data-aos='fade-up'>
				<h1 className={homeFAQCss.headerText}>Don't be shy to ask</h1>
				<div className={homeFAQCss.content}>
					<div className={homeFAQCss.popupContainer} data-aos='fade-right'>
						{FAQCardText.map((card, index) => (
							<div
								key={index}
								className={homeFAQCss.popupCard}
								onClick={() => cardPopupHandler(index)}>
								<div className={homeFAQCss.popupCardHeader}>
									<h1>{card.FAQHeader}</h1>
								</div>
								<div className={homeFAQCss.popupCardAnswer}>
									{card.FAQAnswer}
								</div>
							</div>
						))}
					</div>

					<div className={homeFAQCss.imgContainer}>
						<div
							className={homeFAQCss.imgWrapper}
							data-aos='fade-left'
							data-aos-duration='3000'>
							<img src={FAQImg} alt='coding' />
						</div>
					</div>
				</div>
			</div>
			{popupCard && (
				<Popup trigger={popupCard} setTrigger={setPopupCard}>
					<div
						className={homeFAQCss.popupHeader}
						data-aos='fade-left'
						data-aos-duration='2200'>
						{FAQCardText[clickedCardIndex].FAQHeader}
					</div>
					<div
						className={homeFAQCss.popupAnswer}
						data-aos='fade-right'
						data-aos-duration='1000'>
						{FAQCardText[clickedCardIndex].FAQAnswer}
						<Link to={"faq"} className={homeFAQCss.popupLink}>
							{"  "} read more...
						</Link>
					</div>
				</Popup>
			)}
		</React.Fragment>
	);
};

export default HomeFAQ;
