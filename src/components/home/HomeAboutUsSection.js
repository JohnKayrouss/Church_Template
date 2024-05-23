import React, { useEffect } from "react";
import homeAboutUsSectionCss from "./HomeAboutUsSection.module.css";
import { cardTextRow1, cardTextRow2 } from "./Text";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const HomeAboutUsSection = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<React.Fragment>
			<div className={homeAboutUsSectionCss.container}>
				<div className={homeAboutUsSectionCss.cardRow} data-aos='fade-left'>
					{cardTextRow1.map((card, idx) => {
						return (
							<div className={homeAboutUsSectionCss.card} key={idx}>
								<div className={homeAboutUsSectionCss.cardHeader}>
									<h3>{card.cardHeader}</h3>
								</div>
								<div className={homeAboutUsSectionCss.cardContent}>
									<p>{card.cardContent}</p>
								</div>
								<Link to={"aboutus"}>
									<button className={homeAboutUsSectionCss.cardBtn}>
										Read more...
									</button>
								</Link>
							</div>
						);
					})}
				</div>
				<div
					className={homeAboutUsSectionCss.cardRow}
					data-aos='fade-right'
					id={homeAboutUsSectionCss.cardRowSecond}>
					{cardTextRow2.map((card, idx) => {
						return (
							<div className={homeAboutUsSectionCss.card} key={idx}>
								<div className={homeAboutUsSectionCss.cardHeader}>
									<h3>{card.cardHeader}</h3>
								</div>
								<div className={homeAboutUsSectionCss.cardContent}>
									<p>{card.cardContent}</p>
								</div>
								<Link to={"aboutus"}>
									<button className={homeAboutUsSectionCss.cardBtn}>
										Read more...
									</button>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default HomeAboutUsSection;

/**

<div className={homeAboutUsSectionCss.cardRow} data-aos='fade-right'>
					{cardTextRow2.map((card) => {
						return (
							<div className={homeAboutUsSectionCss.card}>
								<div className={homeAboutUsSectionCss.cardHeader}>
									<h3>{card.cardHeader}</h3>
								</div>
								<div className={homeAboutUsSectionCss.cardContent}>
									<p>{card.cardContent}</p>
								</div>
								<Link to={"aboutus"}>
									<button className={homeAboutUsSectionCss.cardBtn}>
										Read more...
									</button>
								</Link>
							</div>
						);
					})}
				</div>
 */
