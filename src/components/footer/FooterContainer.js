import React from "react";
import css from "./footerContainer.module.css";
import emailIcon from "../../utilities/contact/emailIcon.png";
import linkedinIcon from "../../utilities/contact/linkedinIcon.png";
import githubIcon from "../../utilities/contact/githubIcon.png";

const FooterContainer = () => {
	return (
		<footer className={css.footer}>
			<div className={css.text}>
				<h2>Contact</h2>
				<p>Feel free to reach out!</p>
			</div>
			<ul className={css.links}>
				<li className={css.link}>
					<img src={emailIcon} />
					<a href='mailto:johnkayrous@gmail.com' target='_blank'>
						johnkayrous@gmail.com
					</a>
				</li>
				<li className={css.link}>
					<img src={linkedinIcon} />
					<a
						href='https://www.linkedin.com/in/john-kayrous-64792b235/'
						target='_blank'>
						https://www.linkedin.com/in/john-kayrous-64792b235
					</a>
				</li>
				<li className={css.link}>
					<img src={githubIcon} />
					<a href='https://github.com/JohnKayrouss' target='_blank'>
						https://github.com/JohnKayrouss
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default FooterContainer;
