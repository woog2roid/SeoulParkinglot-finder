import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import './carousel.css';

const Wrapper = styled.div`
    display: block;
	margin: 0px auto;
    width: 80%;
	@media ${(props) => props.theme.tablet} {
        width: 90%;
	}
	@media ${(props) => props.theme.desktop} {
		width: 55%;
	}
`;

const items = [
	{
		src: process.env.PUBLIC_URL + '/images/carousel/1.png',
		alt: 'img1',
		type: 'div',
	},
	{
		src: process.env.PUBLIC_URL + '/images/carousel/2.png',
		alt: 'img2',
		type: 'a',
		href: 'https://github.com/woog2roid',
	},
];

const Slides = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	//item의 HTML tag에 따라서 slides를 return해줌
	const slides = items.map((item) => {
		if (item.type === 'link') {
			return (
				<CarouselItem
					onExiting={() => setAnimating(true)}
					onExited={() => setAnimating(false)}
					key={item.src}
				>
					<Link to={item.href}>
						<img src={item.src} alt={item.alt} />
					</Link>
				</CarouselItem>
			);
		} else if (item.type === 'a') {
			return (
				<CarouselItem
					onExiting={() => setAnimating(true)}
					onExited={() => setAnimating(false)}
					key={item.src}
				>
					<a href={item.href} target="_blank" rel="noreferrer">
						<img src={item.src} alt={item.alt} />
					</a>
				</CarouselItem>
			);
		} else if (item.type === 'div') {
			return (
				<CarouselItem
					onExiting={() => setAnimating(true)}
					onExited={() => setAnimating(false)}
					key={item.src}
				>
					<img src={item.src} alt={item.alt} />
				</CarouselItem>
			);
		}
	});

	return (
		<Wrapper>
			<Carousel activeIndex={activeIndex} next={next} previous={previous}>
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={goToIndex}
				/>
				{slides}
				<CarouselControl
					direction="prev"
					directionText="Previous"
					onClickHandler={previous}
				/>
				<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
			</Carousel>
		</Wrapper>
	);
};

export default Slides;