import React, { useEffect } from "react";
import popupCss from "./Popup.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Popup = (props) => {
	useEffect(() => {
		Aos.init({ duration: 500 });
	}, []);
	return props.trigger ? (
		<React.Fragment>
			<div className={popupCss.popupContainer}>
				<div className={popupCss.popupBox}>
					<i
						className={`${popupCss.popupCloseBtn} gg-close`}
						onClick={() => props.setTrigger(false)}></i>
					{props.children}
				</div>
			</div>
		</React.Fragment>
	) : (
		""
	);
};

export default Popup;

// <button
// className={popupCss.popupCloseBtn}
// onClick={() => props.setTrigger(false)}></button>
