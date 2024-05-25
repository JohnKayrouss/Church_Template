import React from "react";
import "./contact.css";
import emailIcon from "../../utilities/contact/emailIcon.png";
import linkedinIcon from "../../utilities/contact/linkedinIcon.png";
import githubIcon from "../../utilities/contact/githubIcon.png";

const Contact = () => {
	return (
		<footer className='footer_container'>
			<div className='footer_reachOut'>
				<h2>Contact</h2>
				<p>Feel free to reach out!</p>
			</div>
			<div className='footer_contactInfo'>
				<ul>
					<li className='list_item'>
						<div className='icon_wrapper'>
							<img src={emailIcon} />
						</div>
						<a
							href='https://www.linkedin.com/in/john-kayrous-64792b235/'
							target='_blank'>
							https://www.linkedin.com/in/john-kayrous-64792b235
						</a>
					</li>
					<li className='list_item'>
						<div className='icon_wrapper'>
							<img src={linkedinIcon} />
						</div>
						<a
							href='https://www.linkedin.com/in/john-kayrous-64792b235/'
							target='_blank'>
							https://www.linkedin.com/in/john-kayrous-64792b235
						</a>
					</li>
					<li className='list_item'>
						<div className='icon_wrapper'>
							<img src={githubIcon} />
						</div>
						<a href='https://github.com/JohnKayrouss' target='_blank'>
							https://github.com/JohnKayrouss
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Contact;

/*

<h2>Contact</h2>
				<p>Feel free to reach out!</p>

<a href='mailto:johnkayrous@gmail.com' target='_blank'>
						johnkayrous@gmail.com
					</a>


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
*/
