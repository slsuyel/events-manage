'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.owl-next',
		prevEl: '.owl-prev',
	},

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
	}
}

export default function Section8() {
	// Array of 32 brand image sources
	const brandImages = [
		"/assets/img/elements/brand-img1.png",
		"/assets/img/elements/brand-img2.png",
		"/assets/img/elements/brand-img3.png",
		"/assets/img/elements/brand-img4.png",
		"/assets/img/elements/brand-img5.png",
		"/assets/img/elements/brand-img6.png",
		"/assets/img/elements/brand-img7.png",
		"/assets/img/elements/brand-img8.png",
		"/assets/img/elements/brand-img9.png",
		"/assets/img/elements/brand-img10.png",
		"/assets/img/elements/brand-img11.png",
		"/assets/img/elements/brand-img12.png",
		"/assets/img/elements/brand-img13.png",
		"/assets/img/elements/brand-img14.png",
		"/assets/img/elements/brand-img15.png",
		"/assets/img/elements/brand-img16.png",
		"/assets/img/elements/brand-img17.png",
		"/assets/img/elements/brand-img18.png",
		"/assets/img/elements/brand-img19.png",
		"/assets/img/elements/brand-img20.png",
		"/assets/img/elements/brand-img21.png",
		"/assets/img/elements/brand-img22.png",
		"/assets/img/elements/brand-img23.png",
		"/assets/img/elements/brand-img24.png",
		"/assets/img/elements/brand-img25.png",
		"/assets/img/elements/brand-img26.png",
		"/assets/img/elements/brand-img27.png",
		"/assets/img/elements/brand-img28.png",
		"/assets/img/elements/brand-img29.png",
		"/assets/img/elements/brand-img30.png",
		"/assets/img/elements/brand-img31.png",
		"/assets/img/elements/brand-img32.png",
	]

	return (
		<div className="brands7-section-area sp2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 m-auto">
						<div className="brand-header heading10 space-margin60 text-center">
							<h2 className="text-anime-style-3">Our Club Partner</h2>
						</div>
					</div>
				</div>
				<div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					{/* Swiper Slider */}
					<Swiper {...swiperOptions}>
						{brandImages.map((image, index) => (
							<SwiperSlide key={index}>
								<div className="mx-auto w-100" style={{ display: 'flex', justifyContent: 'center' }}>
									<img
										src={image}
										alt={`Brand ${index + 1}`}
										className="rounded-circle"
										width={200}
										height={200}
										style={{
											border: '2px solid #ccc', // Optional border
											boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow effect
										}}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

			</div>
		</div>
	)
}
