import Link from 'next/link'

export default function Header10({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {

	const menuItems = [
		{
			title: 'Home',
			link: '/#',
			subMenu: [
				{ text: 'Eventify-Homepage 01', demoLink: '/', imgSrc: '/assets/img/all-images/demo/demo-img1.png' },
				{ text: 'Eventify-Homepage 02', demoLink: '/index2', imgSrc: '/assets/img/all-images/demo/demo-img2.png' },
				{ text: 'Eventify-Homepage 03', demoLink: '/index3', imgSrc: '/assets/img/all-images/demo/demo-img3.png' },
				{ text: 'Eventify-Homepage 04', demoLink: '/index4', imgSrc: '/assets/img/all-images/demo/demo-img4.png' },
				{ text: 'Eventify-Homepage 05', demoLink: '/index5', imgSrc: '/assets/img/all-images/demo/demo-img5.png' },
			]
		},
		{
			title: 'About Event',
			link: '/about',
		},
		{
			title: 'Speakers',
			link: '/#',
			subMenu: [
				{ text: 'Speakers', demoLink: '/speakers' },
			]
		},
		{
			title: 'Schedule',
			link: '/#',
			subMenu: [
				{ text: 'Our Event', demoLink: '/event' },
				{ text: 'Event Schedule', demoLink: '/event-schedule' },
				{ text: 'Event Details', demoLink: '/event-single' },
			]
		},
		{
			title: 'Register Now',
			link: '/#',
			subMenu: [
				{ text: 'FAQ,s', demoLink: '/faq' },
				{ text: 'Register Now', demoLink: '/contact' },
			]
		},
	];

	return (
		<>
			<header>
				<div className={`header-area homepage8 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="menu-top-area">
									<div className="top-menu-area">
										<p>Are you Ready to Enenify Conferences?<Link href="/#">Buy Ticket</Link></p>
										<ul>
											<li>
												<Link href="/mailto:eventifyconference@.com"><img src="/assets/img/icons/mail1.svg" alt="" />eventifyconference@.com <span> | </span></Link>
											</li>
											<li>
												<Link href="/tel:(234)345-4574"><img src="/assets/img/icons/phn1.svg" alt="" />(234) 345-4574</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/"><img src="/assets/img/logo/logo1.png" alt="" /></Link>
									</div>
									<div className="main-menu">
										<ul>
											{menuItems.map((item, index) => (
												<li key={index}>
													<Link href={item.link}>{item.title}</Link>
													{item.subMenu && (
														<div className="tp-submenu">
															<div className="row">
																<div className="col-lg-12">
																	<div className="all-images-menu">
																		{item.subMenu.map((subItem, subIndex) => (
																			<div className="homemenu-thumb" key={subIndex}>
																				<div className="img1">
																					<img src={'/assets/img/all-images/demo/demo-img1.png'} alt="" />
																				</div>
																				<div className="homemenu-btn">
																					<Link className="vl-btn8" href={subItem.demoLink}>
																						<span className="demo">View Demo</span><span className="arrow"><i className="fa-solid fa-arrow-right" /></span>
																					</Link>
																				</div>
																				<div className="homemenu-text">
																					<Link href={subItem.demoLink}>{subItem.text}</Link>
																				</div>
																			</div>
																		))}
																	</div>
																</div>
															</div>
														</div>
													)}
												</li>
											))}
										</ul>
									</div>
									<div className="btn-area">
										<div className="search-icon header__search header-search-btn" onClick={handleSearch}>
											<a><img src="/assets/img/icons/search1.svg" alt="" /></a>
										</div>
										<div className="btn-area1">
											<Link className="vl-btn8" href="/pricing-plan"><span className="demo">Buy Ticket</span><span className="arrow"><i className="fa-solid fa-arrow-right" /></span>
											</Link>
										</div>
									</div>
									<div className={`header-search-form-wrapper ${isSearch ? 'open' : ''}`}>
										<div className="tx-search-close tx-close" onClick={handleSearch}><i className="fa-solid fa-xmark" /></div>
										<div className="header-search-container">
											<form role="search" className="search-form">
												<input type="search" className="search-field" placeholder="Search …" name="s" />
												<button type="submit" className="search-submit"><img src="/assets/img/icons/search1.svg" alt="" /></button>
											</form>
										</div>
									</div>
									{isSearch && <div className="body-overlay active" onClick={handleSearch} />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
