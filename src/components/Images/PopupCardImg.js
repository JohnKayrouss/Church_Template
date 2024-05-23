import React, { useEffect } from "react";
import popupImgCss from "./PopupCardImg.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
const Popup = (props) => {
	useEffect(() => {
		Aos.init({ duration: 500 });
	}, []);
	return props.trigger ? (
		<React.Fragment>
			<div className={popupImgCss.popupContainer}>
				<div className={popupImgCss.popupBox}>
					{props.children}

					<FontAwesomeIcon
						data-aos='fade-up'
						data-aos-duration='2000'
						data-aos-delay='1600'
						onClick={() => props.setTrigger(false)}
						className={popupImgCss.popupCloseBtn}
						icon={faXmark}
						beat
						size='xs'
						style={{
							"--fa-primary-color": "#5B5C50",
							"--fa-animation-duration": " 2s",
						}}
					/>
				</div>
			</div>
		</React.Fragment>
	) : (
		""
	);
};

export default Popup;
//	<i
//className={`${popupImgCss.popupCloseBtn} gg-close`}
//onClick={() => props.setTrigger(false)}></i>
