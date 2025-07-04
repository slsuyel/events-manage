import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Speakers() {
  // Dynamic list of speakers
  const speakers = [
    {
      name: "Alex Robertson",
      image: "/assets/img/all-images/team/team-img12.png",
      position: "UI/UX Designer",
      socialLinks: {
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        pinterest: "#"
      }
    },
    {
      name: "Alexy Sammony",
      image: "/assets/img/all-images/team/team-img13.png",
      position: "UI/UX Designer",
      socialLinks: {
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        pinterest: "#"
      }
    },
    {
      name: "Kireon Pollardy",
      image: "/assets/img/all-images/team/team-img14.png",
      position: "UI/UX Designer",
      socialLinks: {
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        pinterest: "#"
      }
    },
    {
      name: "Adresy Ineasta",
      image: "/assets/img/all-images/team/team-img15.png",
      position: "UI/UX Designer",
      socialLinks: {
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        pinterest: "#"
      }
    },
    // Add more speakers as needed
  ];

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg6.png)' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 m-auto">
                <div className="heading1 text-center">
                  <h1>Our Speakers</h1>
                  <div className="space20" />
                  <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Our Speakers</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*===== TEAM AREA STARTS =======*/}
        <div className="team-sperkers-section-area sp1">
          <div className="container">
            <div className="row">
              {speakers.map((speaker, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="our-team-boxarea">
                    <div className="team-widget-area">
                      <img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
                      <img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
                      <div className="img1">
                        <img src={'https://img.freepik.com/premium-vector/man-is-giving-speech-simple-flat-design-style_995281-5304.jpg'} alt={speaker.name} className="team-img4" />
                        <div className="share">
                          {/* <Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link> */}
                        </div>
                        <ul>
                          <li>
                            <Link href={speaker.socialLinks.facebook} className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
                          </li>
                          <li>
                            <Link href={speaker.socialLinks.linkedin} className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
                          </li>
                          <li>
                            <Link href={speaker.socialLinks.instagram} className="icon3"><i className="fa-brands fa-instagram" /></Link>
                          </li>
                          <li>
                            <Link href={speaker.socialLinks.pinterest} className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space28" />
                    <div className="content-area">
                      <Link href="/speakers-single">{speaker.name}</Link>
                      <div className="space16" />
                      <p>{speaker.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*===== TEAM AREA ENDS =======*/}

        {/*===== CTA AREA STARTS =======*/}
        <div className="cta1-section-area d-lg-block d-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <div className="cta1-main-boxarea">
                  <div className="timer-btn-area">
                    <Countdown />
                    <div className="btn-area1">
                      <Link href="/contact" className="vl-btn1">Register Now</Link>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />16-18 July 2025</Link>
                    </li>
                    <li className="m-0">
                      <Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Dhaka & Chattogram</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===== CTA AREA ENDS =======*/}
      </div>
    </Layout>
  )
}
