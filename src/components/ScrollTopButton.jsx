import React, { useState, useEffect } from 'react';

export default function ScrollTopButton() {
	const [showScrollButton, setShowScrollButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 300) {
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		});
	}, []);

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
					onclick={scrollToTop}
				>
					<i class='fas fa-chevron-up'></i>
				</div>
			)}
		</>
	);
}
