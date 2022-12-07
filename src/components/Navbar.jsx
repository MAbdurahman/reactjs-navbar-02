import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import $ from 'jquery';

export default function Navbar() {
	//**************** functions ****************//
	function animation() {
		let tabsNewAnim = $('#navbarSupportedContent');
		let activeItemNewAnim = tabsNewAnim.find('.active');
		let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
		let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
		let itemPosNewAnimTop = activeItemNewAnim.position();
		let itemPosNewAnimLeft = activeItemNewAnim.position();
		$('.hori-selector').css({
			top: itemPosNewAnimTop.top + 'px',
			left: itemPosNewAnimLeft.left + 'px',
			height: activeWidthNewAnimHeight + 'px',
			width: activeWidthNewAnimWidth + 'px',
		});
		$('#navbarSupportedContent').on('click', 'li', function (e) {
			$('#navbarSupportedContent ul li').removeClass('active');
			$(this).addClass('active');
			let activeWidthNewAnimHeight = $(this).innerHeight();
			let activeWidthNewAnimWidth = $(this).innerWidth();
			let itemPosNewAnimTop = $(this).position();
			let itemPosNewAnimLeft = $(this).position();
			$('.hori-selector').css({
				top: itemPosNewAnimTop.top + 'px',
				left: itemPosNewAnimLeft.left + 'px',
				height: activeWidthNewAnimHeight + 'px',
				width: activeWidthNewAnimWidth + 'px',
			});
		});
	}

	useEffect(() => {
		animation();
		$(window).on('resize', function () {
			setTimeout(function () {
				animation();
			}, 500);
		});
	}, []);

	return (
		<nav className='navbar navbar-expand-lg navbar-mainbg'>
			<div className='container'>
				<li className='nav-item'>
					<Link
						smooth={true}
						className='navbar-brand navbar-logo'
						to='home'
						exact
					>
						New Horizons
					</Link>
				</li>

				<button
					className='navbar-toggler'
					onClick={function () {
						setTimeout(function () {
							animation();
						});
					}}
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<i className='fas fa-bars text-white'></i>
				</button>

				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav ml-auto'>
						<div className='hori-selector'>
							<div className='left'></div>
							<div className='right'></div>
						</div>

						<li className='nav-item active'>
							<Link
								smooth={true}
								offset={100}
								className='nav-link'
								to='home'
								exact
							>
								<i className='fas fa-home'></i>Home
							</Link>
						</li>

						<li className='nav-item'>
							<Link
								smooth={true}
								offset={100}
								className='nav-link'
								to='about'
								exact
							>
								<i className='fas fa-user-tie'></i>About
							</Link>
						</li>

						<li className='nav-item'>
							<Link
								smooth={true}
								offset={100}
								className='nav-link'
								to='skills'
								exact
							>
								<i className='fas fa-cogs'></i>Skills
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								smooth={true}
								offset={100}
								className='nav-link'
								to='portfolio'
								exact
							>
								<i className='fas fa-images'></i>Portfolio
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								smooth={true}
								offset={100}
								className='nav-link'
								to='contact'
								exact
							>
								<i className='fas fa-envelope'></i>Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
