import React, { useEffect } from "react";
import FAQCss from "./FAQContainer.module.css";
import { FAQCardText } from "../home/Text";
import Aos from "aos";

const FAQContainer = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className={FAQCss.container}>
			<nav className={`${FAQCss.accordion} ${FAQCss.arrows}`}>
				<header className={FAQCss.box}>
					<label
						htmlFor='acc-close'
						className={FAQCss.boxTitle}
						data-aos='fade-left'
						data-aos-duration='5000'
						data-aos-delay='300'
						data-aos-easing='ease-in-sine'>
						Don't be shy to ask
					</label>
				</header>

				{FAQCardText.map((item, idx) => (
					<React.Fragment key={item.idx}>
						<input type='radio' name='accordion' id={idx} />
						<section
							className={FAQCss.box}
							data-aos='fade-left'
							data-aos-duration='5000'
							data-aos-delay='300'
							data-aos-easing='ease-in-sine'>
							<label
								className={FAQCss.boxTitle}
								htmlFor={idx}
								data-aos='fade-up'
								data-aos-duration='5000'
								data-aos-delay='1000'
								data-aos-easing='ease-in-sine'>
								{item.FAQHeader}
							</label>
							<label className={FAQCss.boxClose} htmlFor='acc-close'></label>
							<div className={FAQCss.boxContent}>{item.FAQAnswer}</div>
						</section>
					</React.Fragment>
				))}
			</nav>
		</div>
	);
};

export default FAQContainer;
