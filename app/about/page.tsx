"use client"

import CountUp from "react-countup"
import Countdown from "@/components/elements/Countdown"
import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"

export default function About() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="inner-page-header" style={{ backgroundImage: "url(assets/img/bg/header-bg5.png)" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <div className="heading1 text-center">
                    <h1>Bangladesh BEAR Summit 2025</h1>
                    <p className="summit-subtitle">Biotech | Electronics | AI | Robotics</p>
                    <div className="space20" />
                    <Link href="/">
                      Home <i className="fa-solid fa-angle-right" /> <span>About Summit</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== ABOUT AREA STARTS =======*/}
          <div className="about1-section-area sp1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-imges">
                    <div className="img1 reveal image-anime">
                      <img src="/assets/img/all-images/about/about-img1.png" alt="BEAR Summit 2025" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="space30" />
                        <div className="img1 reveal image-anime">
                          <img src="/assets/img/all-images/about/about-img2.png" alt="Innovation" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="space30" />
                        <div className="img1 reveal image-anime">
                          <img src="/assets/img/all-images/about/about-img3.png" alt="Technology" />
                        </div>
                      </div>
                    </div>
                    <div className="about-btnarea">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={200}
                        height={200}
                        viewBox="0 0 200 200"
                        fill="none"
                        className="keyframe5"
                      >
                        <path
                          d="M93.8771 2.53621C96.8982 1.28483 98.4087 0.659138 100 0.659138C101.591 0.659138 103.102 1.28483 106.123 2.5362L164.588 26.7531C167.609 28.0045 169.119 28.6302 170.245 29.7554C171.37 30.8806 171.995 32.3912 173.247 35.4123L197.464 93.8771C198.715 96.8982 199.341 98.4087 199.341 100C199.341 101.591 198.715 103.102 197.464 106.123L173.247 164.588C171.995 167.609 171.37 169.119 170.245 170.245C169.119 171.37 167.609 171.995 164.588 173.247L106.123 197.464C103.102 198.715 101.591 199.341 100 199.341C98.4087 199.341 96.8982 198.715 93.8771 197.464L35.4123 173.247C32.3912 171.995 30.8806 171.37 29.7554 170.245C28.6302 169.119 28.0045 167.609 26.7531 164.588L2.53621 106.123C1.28483 103.102 0.659138 101.591 0.659138 100C0.659138 98.4087 1.28483 96.8982 2.5362 93.8771L26.7531 35.4123C28.0045 32.3912 28.6302 30.8806 29.7554 29.7554C30.8806 28.6302 32.3912 28.0045 35.4123 26.7531L93.8771 2.53621Z"
                          fill="#00B894"
                        />
                      </svg>
                      <Link href="/contact">
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                        <br />
                        <div className="space12" />
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-header-area heading2">
                    <h5 data-aos="fade-left" data-aos-duration={800}>
                      Transforming a Nation Through Deep-Tech
                    </h5>
                    <div className="space16" />
                    <h2 className="text-anime-style-3">Bangladesh as a Nation of Innovation</h2>
                    <div className="space16" />
                    <p data-aos="fade-left" data-aos-duration={900}>
                      Jointly organized by the World Bank, ICT Division, EDGE Project, and BIDA, the BEAR Summit 2025
                      marks the beginning of Bangladesh's journey to become a global deep-tech powerhouse. At the
                      intersection of Biotechnology, Electronics, Artificial Intelligence, and Robotics, this summit is
                      more than an event — it's a launchpad for a decade of innovation, talent, and investment.
                    </p>
                    <div className="space32" />
                    <div className="about-counter-area">
                      <div className="counter-box">
                        <h2>
                          <CountUp className="odometer" enableScrollSpy={true} end={500} />+
                        </h2>
                        <div className="space18" />
                        <p>Global Leaders</p>
                      </div>
                      <div className="counter-box box2">
                        <h2>
                          <CountUp className="odometer" enableScrollSpy={true} end={50} />+
                        </h2>
                        <div className="space18" />
                        <p>Expert Speakers</p>
                      </div>
                      <div className="counter-box box3" style={{ border: "none" }}>
                        <h2>
                          <CountUp className="odometer" enableScrollSpy={true} end={2} />
                          K+
                        </h2>
                        <div className="space18" />
                        <p>Attendees</p>
                      </div>
                    </div>
                    <div className="space32" />
                    <div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
                      <Link href="/contact" className="vl-btn1">
                        Join the Summit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== BRANDS AREA STARTS =======*/}
          <div className="brands3-section-area sp2">
            <BrandSlider />


          </div>

          {/*===== WHY ATTEND AREA STARTS =======*/}
          <div className="choose-section-area sp2">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 m-auto">
                  <div className="heading2 text-center space-margin60">
                    <h5>Why Attend?</h5>
                    <div className="space18" />
                    <h2>Transform Bangladesh's Future</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="choose-widget-boxarea">
                    <div className="icons">
                      <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                    </div>
                    <div className="space24" />
                    <div className="content-area">
                      <Link href="/event-single">Inspire Policy & Innovation</Link>
                      <div className="space16" />
                      <p>
                        Learn how Bangladesh is shaping a knowledge-based economy through strategic policies, such as
                        National Semiconductor Policy 2025, and National AI Policy 2025.
                      </p>
                      <div className="space24" />
                      <Link href="/event-single" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="choose-widget-boxarea">
                    <div className="icons">
                      <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                    </div>
                    <div className="space24" />
                    <div className="content-area">
                      <Link href="/event-single">Meet Global Tech Leaders</Link>
                      <div className="space16" />
                      <p>
                        Connect with senior executives from the $1T+ global semiconductor industry and learn from their
                        expertise and insights.
                      </p>
                      <div className="space24" />
                      <Link href="/event-single" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="choose-widget-boxarea">
                    <div className="icons">
                      <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                    </div>
                    <div className="space24" />
                    <div className="content-area">
                      <Link href="/event-single">See the Future in Action</Link>
                      <div className="space16" />
                      <p>
                        Explore the Innovation Pavilion, where Bangladesh's most promising ideas come to life through
                        cutting-edge demonstrations.
                      </p>
                      <div className="space24" />
                      <Link href="/event-single" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="choose-widget-boxarea">
                    <div className="icons">
                      <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                    </div>
                    <div className="space24" />
                    <div className="content-area">
                      <Link href="/event-single">Connect with Change-Makers</Link>
                      <div className="space16" />
                      <p>
                        Join policymakers, entrepreneurs, and academics to redefine what's possible in Bangladesh's
                        deep-tech ecosystem.
                      </p>
                      <div className="space24" />
                      <Link href="/event-single" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="choose-widget-boxarea">
                    <div className="icons">
                      <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                    </div>
                    <div className="space24" />
                    <div className="content-area">
                      <Link href="/event-single">Innovation Pavilion</Link>
                      <div className="space16" />
                      <p>
                        Showcase your scientific posters or technology demos to national and international audiences.
                        Top submissions receive global mentorship.
                      </p>
                      <div className="space24" />
                      <Link href="/event-single" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="choose-widget-boxarea">
                    <div className="icons">
                      <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                    </div>
                    <div className="space24" />
                    <div className="content-area">
                      <Link href="/event-single">Global Semiconductor Value Chain</Link>
                      <div className="space16" />
                      <p>
                        Launch Bangladesh's role in the global semiconductor value chain and explore opportunities for
                        cross-sector collaboration and investments.
                      </p>
                      <div className="space24" />
                      <Link href="/event-single" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== KEY GOALS AREA STARTS =======*/}
          <div className="about1-section-area sp1" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <div className="heading2 text-center space-margin60">
                    <h5>Summit Goals</h5>
                    <div className="space18" />
                    <h2>Key Objectives</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="goals-list">
                    <ul>
                      <li>
                        <i className="fa-solid fa-check-circle"></i>
                        <span>
                          Advance national priorities: healthcare, climate resilience, food security, and inclusive
                          development
                        </span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check-circle"></i>
                        <span>
                          Catalyze cross-sector collaboration and investments in semiconductors, AI, biotech, and
                          robotics
                        </span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check-circle"></i>
                        <span>Launch Bangladesh's role in the global semiconductor value chain</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="goals-list">
                    <ul>
                      <li>
                        <i className="fa-solid fa-check-circle"></i>
                        <span>Engage youth, academia, and industry in frontier R&D</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check-circle"></i>
                        <span>Align global best practices with Bangladesh's strategic deep-tech roadmap</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check-circle"></i>
                        <span>Foster innovation ecosystem for sustainable economic growth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== CTA AREA STARTS =======*/}
          <div className="cta1-section-area d-lg-block d-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 m-auto">
                  <div className="cta1-main-boxarea">
                    <div className="timer-btn-area">
                      <Countdown />
                      <div className="btn-area1">
                        <Link href="/contact" className="vl-btn1">
                          Register Now
                        </Link>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <Link href="/#">
                          <img src="/assets/img/icons/calender1.svg" alt="" />
                          July 16-18, 2025
                        </Link>
                      </li>
                      <li className="m-0">
                        <Link href="/#">
                          <img src="/assets/img/icons/location1.svg" alt="" />
                          Dhaka & Chattogram, Bangladesh
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== CTA AREA MOBILE =======*/}

        </div>
      </Layout>

      <style jsx>{`
                .summit-subtitle {
                    font-size: 1.2rem;
                    color: #00B894;
                    font-weight: 600;
                    margin-top: 0.5rem;
                }

                .goals-list ul {
                    list-style: none;
                    padding: 0;
                }

                .goals-list li {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                    padding: 1rem;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }

                .goals-list li i {
                    color: #00B894;
                    margin-right: 1rem;
                    margin-top: 0.2rem;
                    font-size: 1.2rem;
                }

                .goals-list li span {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: #333;
                }

                .about-btnarea svg path {
                    fill: #00B894;
                }

                .counter-box h2 {
                    color: #00B894;
                }

                .vl-btn1 {
                    background: linear-gradient(135deg, #00B894 0%, #00A085 100%);
                }

                .vl-btn1:hover {
                    background: linear-gradient(135deg, #00A085 0%, #008F75 100%);
                }
            `}</style>
    </>
  )
}
