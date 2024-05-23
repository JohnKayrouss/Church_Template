import React, { useState } from "react";
import ministriesCss from "./MinistriesContainer.module.css";
import { ministries } from "./ministriesText";
import MinistriesContent from "./MinistriesContent";
import MinistriesSideMenu from "./MinistriesSideMenu";
import Aos from "aos";

const MinistriesContainer = () => {
	const [index, setIndex] = useState(0);
	const btnHandler = (idx) => {
		setIndex(idx);
	};
	console.log(ministries[0].values[1]);

	return (
		<React.Fragment>
			<div className={ministriesCss.container}>
				<MinistriesSideMenu btnHandler={btnHandler} index={index} />
				<MinistriesContent index={index} />
			</div>
		</React.Fragment>
	);
};

export default MinistriesContainer;
