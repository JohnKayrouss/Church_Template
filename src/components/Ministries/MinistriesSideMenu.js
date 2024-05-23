import React from "react";
import ministriesCss from "./MinistriesContainer.module.css";
import { ministries } from "./ministriesText";

const MinistriesSideMenu = ({ index, btnHandler }) => {
	return (
		<React.Fragment>
			<div className={ministriesCss.MinistriesSideMenu}>
				<div className={ministriesCss.ministriesSideMenuItems}>
					{ministries.map((ministry, idx) => (
						<div key={idx}>
							<button
								className={ministriesCss.ministriesSideMenuItem}
								onClick={() => btnHandler(idx)}>
								{ministry.ministryHeader}
							</button>
						</div>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default MinistriesSideMenu;
