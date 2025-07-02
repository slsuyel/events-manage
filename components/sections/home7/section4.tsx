import Link from 'next/link'

export default function Section4() {
	return (
		<>
			<div className="vanue-section-area sp2">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 m-auto">
							<div className="vanue-header heading10 text-center space-margin60">
								<h2 className="text-anime-style-3">Event Schedule</h2>
							</div>
						</div>
					</div>
					<div className="row">

						<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
							<div className="vanue-single-item-area">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/others/vanue-img1.png" alt="" />
								</div>
								<div className="content-area">
									<span>Day 1 – July 16 (Dhaka)</span>
									<div className="space16" />
									<p className=' fs-6'>Inaugural Keynotes | AI Policy & Ethics | Cybersecurity | Robotics | Innovation Pavilion</p>
									<div className="space12" />
									<p>Dhaka, Bangladesh</p>
									<div className="space16" />
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1100}>
							<div className="vanue-single-item-area">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/others/vanue-img2.png" alt="" />
								</div>
								<div className="content-area">
									<span>Day 2 – July 17 (Dhaka)</span>
									<div className="space16" />
									<p className='fs-6'>Semiconductor Talent Development | Student Posters | Industry Deep Dive | Global Executive Networking</p>
									<div className="space12" />
									<p>Dhaka, Bangladesh</p>
									<div className="space16" />
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
							<div className="vanue-single-item-area">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/others/vanue-img3.png" alt="" />
								</div>
								<div className="content-area">
									<span>Day 3 – July 18 (Chattogram)</span>
									<div className="space16" />
									<p className='fs-6'>Exclusive Roundtable with global semiconductor leaders | Bangladesh Declaration</p>
									<div className="space12" />
									<p>Chattogram, Bangladesh</p>
									<div className="space16" />
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}
