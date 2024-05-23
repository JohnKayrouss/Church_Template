import React, { useEffect, useState, useRef } from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

import imageCss from "./ImagesContainer.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Aos from "aos";
import PopupCardImg from "./PopupCardImg";
const ImagesContainer = () => {
	const navRef = useRef();
	const [imagesList, setImagesList] = useState([]);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const detectSceenWidth = () => {
		setScreenWidth(window.innerWidth);
	};
	const imageStorageFolder = ref(storage, "images/");
	useEffect(() => {
		listAll(imageStorageFolder).then((resp) => {
			resp.items.forEach((imgURL) => {
				getDownloadURL(imgURL).then((url) => {
					setImagesList((prev) => {
						const updatedList = new Set([...prev, url]);
						return Array.from(updatedList);
					});
				});
			});
		});
	}, []);

	useEffect(() => {
		window.addEventListener("resize", detectSceenWidth);
		return () => {
			window.removeEventListener("resize", detectSceenWidth);
		};
	}, [screenWidth]);

	const [popupImg, setPopupImg] = useState(false);
	const [clickedCardIndex, setClickedCardIndex] = useState(null);

	const cardPopupHandler = (img, index) => {
		setPopupImg(true);
		setClickedCardIndex(index);
	};
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<React.Fragment>
			<div className={imageCss.page} ref={navRef}>
				<Masonry
					className={"photo-list"}
					elementType={"ul"}
					columnsCount={screenWidth >= 769 ? 3 : screenWidth >= 400 ? 2 : 1}
					gutter='10px'
					columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					{imagesList.map((image, idx) => (
						<div
							key={idx}
							data-aos='zoom-in-up'
							data-aos-duration='2000'
							data-aos-delay='100'>
							<li className='photo-item' key={idx}>
								<img
									src={image}
									alt=''
									style={{ width: "100%", display: "block" }}
									onClick={() => cardPopupHandler(image, idx)}
								/>
							</li>
						</div>
					))}
				</Masonry>
			</div>
			{popupImg && (
				<PopupCardImg trigger={popupImg} setTrigger={setPopupImg}>
					<img
						src={imagesList[clickedCardIndex]}
						alt=''
						style={{
							maxWidth: "100%",
							maxHeight: "100%",
							margin: "auto",
							boxShadow: "0px 3px 10px 4px #134CDC, 0px 3px 10px 7px #EFEA0F",
							borderRadius: "15px",
						}}
					/>
				</PopupCardImg>
			)}
		</React.Fragment>
	);
};

export default ImagesContainer;
