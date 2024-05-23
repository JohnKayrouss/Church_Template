import React, { useEffect } from "react";
import SloganCss from "./HeaderSlogan.module.css";
import ImgSlogan from "../../utilities/header.jpg";

const HeaderSlogan = () => {
	return (
		<React.Fragment>
			<div className={SloganCss.imgContainer}>
				<img src={ImgSlogan} alt='coding' />
			</div>
		</React.Fragment>
	);
};

export default HeaderSlogan;
