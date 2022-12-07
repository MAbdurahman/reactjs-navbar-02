import React, { useState, useEffect } from 'react';

export default function ScrollTopButton() {
	const [showScrollButton, setShowScrollButton] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 300) {
				setShowScrollButton(1);
			} else {
				setShowScrollButton(0);
			}
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 100,
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
