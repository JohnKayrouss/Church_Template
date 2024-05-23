import React, { useEffect, useRef, useState } from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import GalleryCss from "./GalleryContainer.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GalleryContainer = () => {
	const [width, setWidth] = useState(0);
	const [imagesList, setImagesList] = useState([]);

	const carouselRef = useRef();
	const imageStorageFolder = ref(storage, "carousel/");
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
		if (carouselRef.current) {
			const width =
				carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
			setWidth(width);
		}
	}, [imagesList]);

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<React.Fragment>
			<div className={GalleryCss.GalleryContainer} data-aos='flip-left'>
				<div className={GalleryCss.GalleryHeaderBoxOut}>
					<div
						className={GalleryCss.GalleryHeaderBoxIn}
						data-aos='fade-right'
						data-aos-duration='5000'
						data-aos-delay='1000'
						data-aos-easing='ease-in-sine'>
						<h1 className={GalleryCss.headerText}>Our Gallery</h1>
						<FontAwesomeIcon
							icon={faImage}
							className={GalleryCss.galleryHeaderIcon}
						/>
					</div>
				</div>
				<div
					className={GalleryCss.slideContainer}
					data-aos='fade-right'
					data-aos-duration='2000'
					data-aos-delay='300'
					data-aos-easing='ease-in-sine'>
					<motion.div ref={carouselRef} className={GalleryCss.Carousel}>
						<motion.div
							drag='x'
							dragConstraints={{ right: 0, left: -width }}
							className={GalleryCss.innerCarousel}>
							{imagesList.map((image) => {
								return (
									<motion.div className={GalleryCss.imgBoxGallery} key={image}>
										<img
											src={image}
											alt='image'
											className={GalleryCss.imgGallery}
										/>
									</motion.div>
								);
							})}
							<div className={GalleryCss.BtnToGalleryBox}>
								<Link to='images'>
									<button className={GalleryCss.BtnToGallery}>See more</button>
								</Link>
							</div>
						</motion.div>
					</motion.div>
				</div>
				<div
					className={GalleryCss.GalleryFooterBoxOut}
					data-aos='fade-left'
					data-aos-duration='1300'
					data-aos-delay='300'
					data-aos-easing='ease-in-sine'>
					<div className={GalleryCss.GalleryFooterBoxIn}>
						<FontAwesomeIcon
							icon={faChevronLeft}
							className={GalleryCss.galleryFooterIconFirst}
							beat
							size='xs'
							style={{
								"--fa-primary-color": "#000000",
								"--fa-animation-duration": " 1.5s",
							}}
						/>
						<FontAwesomeIcon
							icon={faChevronLeft}
							className={GalleryCss.galleryFooterIconSecond}
							beat
							size='xs'
							style={{
								"--fa-primary-color": "#5B5C50",
								"--fa-animation-duration": " 1.5s",
							}}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default GalleryContainer;
