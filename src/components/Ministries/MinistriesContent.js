import React from "react";
import ministriesCss from "./MinistriesContainer.module.css";
import { ministries } from "./ministriesText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookBible,
	faHandHoldingHeart,
	faHandshake,
	faCannabis,
} from "@fortawesome/free-solid-svg-icons";
const MinistriesContent = ({ index }) => {
	let keys = Object.keys(ministries[index]);
	return (
		<React.Fragment>
			<div className={ministriesCss.ministryContentContainer}>
				{keys.map((ObjecyKey, idx) => {
					if (ObjecyKey === "ministryHeader") return;
					else {
						return (
							<div
								key={idx}
								className={ministriesCss.ministryContentBoxHeaderMapContainer}>
								<div className={ministriesCss.ministryContentBoxHeader}>
									<FontAwesomeIcon
										icon={faBookBible}
										className={ministriesCss.ministryHeaderIcon}
									/>
									{ministries[index][ObjecyKey].header}
								</div>
								<div className={ministriesCss.ministryContentBoxContent}>
									{ministries[index][ObjecyKey].content
										? ministries[index][ObjecyKey].content
										: ministries[index][ObjecyKey].contentArr.map(
												(itemArr, idxArr) => (
													<div
														key={idxArr}
														className={ministriesCss.meetingscontentArr}>
														<div
															className={
																ministriesCss.ministryContentArrContent
															}>
															<p>
																<FontAwesomeIcon
																	icon={faHandHoldingHeart}
																	className={
																		ministriesCss.meetingsContentArrIcon
																	}
																/>
																{itemArr}
															</p>
														</div>
													</div>
												)
										  )}
								</div>
							</div>
						);
					}
				})}
			</div>
		</React.Fragment>
	);
};

export default MinistriesContent;
