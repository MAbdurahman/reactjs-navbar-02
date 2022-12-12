import React, { useEffect, useState } from 'react';

export default function ScrollTopButton() {
	//**************** variables ****************//
	const [showScrollButton, setShowScrollButton] = useState(false);

	//**************** functions ****************//
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 300) {
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		});
	}, [setShowScrollButton]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			{showScrollButton && (
				<div
					className='top-btn-position top-btn-style'
					onClick={scrollToTop}
				>
					<i className='fas fa-chevron-up'></i>
				</div>
			)}
		</>
	);
}
