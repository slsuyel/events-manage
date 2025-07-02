import CircleText from '@/components/elements/CircleText'
import Link from 'next/link'

export default function Section3() {
	return (
		<>

			<div className="about7-section-area sp1">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="about-header-area heading10">
								<h2 className="text-anime-style-3">Transforming a Nation Through Deep-Tech</h2>
								<div className="space16" />
								<p data-aos="fade-left" data-aos-duration={900}>
									Jointly organized by the World Bank, ICT Division, EDGE Project, and BIDA, the BEAR Summit 2025 marks the beginning of Bangladesh's journey to become a global deep-tech powerhouse. At the intersection of Biotechnology, Electronics, Artificial Intelligence, and Robotics, this summit is more than an event — it's a launchpad for a decade of innovation, talent, and investment.
								</p>
								<div className="space32" />
								<div className="about-auhtor-box" data-aos="fade-left" data-aos-duration={1000}>
									<div className="icons">
										<img src="/assets/img/icons/about-icon1.svg" alt="" />
									</div>
									<div className="text">
										<Link href="/#">Collaborating for Deep-Tech Impact</Link>
										<div className="space12" />
										<p>This summit brings together global leaders in deep-tech, business, and innovation.</p>
									</div>
								</div>
								<div className="space20" />
								<div className="about-auhtor-box" data-aos="fade-left" data-aos-duration={1100}>
									<div className="icons">
										<img src="/assets/img/icons/about-icon2.svg" alt="" />
									</div>
									<div className="text">
										<Link href="/#">Where Technology Shapes the Future</Link>
										<div className="space12" />
										<p>With a focus on Biotechnology, Electronics, AI, and Robotics.</p>
									</div>
								</div>
								<div className="space32" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
									<Link href="/contact" className="vl-btn7">Become an Attendee <span><i className="fa-solid fa-arrow-right" /></span></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="about-all-images">
								<div className="img1 image-anime reveal">
									<img src="/assets/img/all-images/about/about-img17.png" alt="" />
								</div>
								<div className="img2 image-anime reveal">
									<img src="/assets/img/all-images/about/about-img18.png" alt="" />
								</div>
								<div className="arrow-btn">
									<Link href="/#">
										<div className="content">
											<CircleText text="Build Success Brand." />
										</div>
										<img src="/assets/img/icons/arrow1.svg" alt="" className="arrow1" />
									</Link>
								</div>
								<img src="/assets/img/elements/elements37.png" alt="" className="elements37" />
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
