"use client"
import Countdown from '@/components/elements/Countdown';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from 'react'; // Import useState for the tabs

export default function EventSchedule() {

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  const eventData = [
    {
      day: "Day 01",
      date: "16 JUL 2025",
      schedule: [
        { time: "9:00 AM", title: "Preamble by Prof. Muhammad Mustafa Hussain" },
        { time: "9:05 AM", title: "Welcome Message from Prof. Yunus (Video or In-person)" },
        { time: "9:10 AM", title: "Opening Speech by Mr. Faiz Taieyb" },
        { time: "9:25 AM", title: "Keynote Talk by World Bank" },
        { time: "9:40 AM", title: "MOU Signing for STAR Facility" },
        { time: "9:50 AM", title: "National AI Policy by Tarik Adnan Moon" },
        {
          time: "10:00 AM",
          title: "AI for the People: Jobs, Justice, and Digital Progress",
          panel: "Panelists: BNP, NCP, JI, Govt. Policymakers | Moderator: HAS Faiz Taiyeb",
        },
        { time: "11:00 AM", title: "AI Investment and Start-ups" },
        { time: "12:00 PM", title: "AI Talent Force Development" },
        { time: "1:00 PM", title: "Lunch" },
        {
          time: "2:00 PM",
          title: "Cyber Security - Conventional and AI Enhanced",
          panel: "Panelists: NSU, BRAC, AFD, Industry | Moderator: DU",
        },
        {
          time: "3:00 PM",
          title: "Biotech for Health, Food & Water Security",
          panel: "Panelists: DU, NSU, EWU, BAU, Industry, Govt. | Moderator: JU",
        },
        {
          time: "4:00 PM",
          title: "Robotics for Resilience, Labor, and Industry Revolution 4.0 and 5.0",
          panel: "Panelists: MIST, BRAC, Industry | Moderator: NSU",
        },
        {
          time: "5:00 PM",
          title: "Networking at Innovation Pavilion",
          additionalInfo: "With Bangladeshi Traditional Snacks, Sweets and Fruits",
        },
      ],
    },
    {
      day: "Day 02",
      date: "17 JUL 2025",
      schedule: [
        { time: "9:00 AM", title: "Inaugural Session Welcome" },
        { time: "9:05 AM", title: "Welcome Message from Prof. Yunus (Video or In-person)" },
        { time: "9:10 AM", title: "Inauguration by Mr. Faiz Taiyeb" },
        { time: "9:25 AM", title: 'BIDA Presentation: "Why Bangladesh?"' },
        { time: "9:45 AM", title: "National Initiatives for Semiconductor by Prof. Mustafa Hussain" },
        { time: "10:00 AM", title: "Keynote on NRBs in Global Semiconductor Ecosystem by Prof. Sayeef Salahuddin" },
        {
          time: "10:25 AM",
          title: "Panel 1 on Semiconductor Talent Force in Bangladesh",
          panel:
            "Panelists: VC Saleh Naqib, U Rajshahi; Former VC M. Rezwan Khan, UIU; BUET EEE Chair ABM Harun Ur Rashid; AIUB Prof. Shahriar Rizvi; MIST Commandant Major General Nasim; AUST EEE Chair Bobby Barua | Moderator: Prof. M. Anisuzzaman Talukdar, BUET",
        },
        { time: "12:00 PM", title: "Lunch" },
        { time: "1:00 PM", title: "Poster Presentation by Students" },
        {
          time: "2:00 PM",
          title: "Bangladesh Semiconductor Industry Panel",
          panel:
            "Panelists: All CEOs of Bangladeshi Companies | Moderator: Dr. Sayeed Badrudduza, Sr. Principal Engr and Director, NXP",
        },
        {
          time: "5:00 PM",
          title: "Networking at Innovation Pavilion & Award Ceremony",
          additionalInfo: "Award by IEEE EDS President Bin Zhao",
        },
      ],
    },
    {
      day: "Day 03",
      date: "18 JUL 2025",
      schedule: [
        { time: "7:00 AM", title: "Bus to Airport" },
        { time: "8:00 AM", title: "Flight to Chittagong" },
        { time: "9:00 AM", title: "Cars to KEPZ" },
        { time: "9:30 AM", title: "Welcome message by KEPZ Leadership and Breakfast" },
        { time: "9:45 AM", title: "Tour of KEPZ" },
        {
          time: "11:00 AM",
          title: "Talks by Foreign Delegates",
          panel:
            "Panelists: Texas Instruments CTO; SK Hynix CVP; MediaTek CVP; SanDisk/Western Digital VP; Global Foundries VP; Tokyo Electron Limited VP; Enovix VP; Angel Investor; WTO Director | Moderator: Dr. Anisul Khan, VP, Applied Materials",
        },
        { time: "1:20 PM", title: "Working lunch and networking" },
        { time: "2:00 PM", title: "Various Meetings" },
        { time: "3:30 PM", title: "Bangladesh Declaration and Closing Remark" },
        { time: "5:00 PM", title: "Return flight to Dhaka" },
      ],
    },
  ];

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg10.png)' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <div className="heading1 text-center text-light">
                    <h1>Event Schedule</h1>
                    <div className="space20" />
                    <Link href="/" className="text-white"><i className="fa-solid fa-angle-right" /> Home <span>Event Schedule</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== EVENT AREA STARTS =======*/}
          <div className="schedule-section-area sp10 bg-info pt-5">
            <div className="container">
              {/* Tab Navigation */}
              <ul className="nav nav-pills justify-content-center mb-5" id="scheduleTab" role="tablist">
                {eventData.map((event, index) => (
                  <li className="nav-item" role="presentation" key={index}>
                    <button
                      className={`nav-link fw-bold btn p-3 mx-2 ${activeTab === index ? 'active btn-success' : 'bg-white'}`}
                      onClick={() => setActiveTab(index)}
                      type="button"
                    >
                      {event.day}: {event.date}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Tab Content */}
              <div className="tab-content" id="scheduleTabContent">
                {eventData.map((event, index) => (
                  <div
                    key={index}
                    className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
                    id={`day-${index}`}
                    role="tabpanel"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-10 col-xl-8">
                        <div className="timeline-container">
                          {event.schedule.map((item, idx) => (
                            <div className="timeline-item" key={idx}>
                              <div className="timeline-content card shadow-sm">
                                <div className="card-body">
                                  <h6 className="card-subtitle mb-2 text-primary fw-bold">
                                    <i className="fa-regular fa-clock me-2" />
                                    {item.time}
                                  </h6>
                                  <h5 className="card-title fw-bold mb-2">{item.title}</h5>
                                  {item.panel &&
                                    <p className="card-text text-muted small mt-2 mb-1">
                                      <strong className="text-dark">PANEL:</strong> {item.panel}
                                    </p>
                                  }
                                  {item.additionalInfo &&
                                    <p className="card-text fst-italic text-success small mb-0">
                                      <i className="fa-solid fa-circle-info me-2" />
                                      {item.additionalInfo}
                                    </p>
                                  }
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*===== EVENT AREA ENDS =======*/}

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
                    <ul className="mt-4">
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

      {/* Add this style block for the timeline effect */}
      <style jsx global>{`
        .nav-pills .nav-link {
          border: 1px solid var(--vl-primary);
          color: var(--vl-primary);
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
          color: #fff;
          background-color: var(--vl-primary);
        }
        .timeline-container {
          position: relative;
          padding-left: 50px; /* Space for the timeline line and dots */
        }
        /* The vertical timeline line */
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 10px;
          bottom: 10px;
          width: 3px;
          background-color: #e9ecef;
          border-radius: 3px;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 30px;
        }
        /* The circular dot on the timeline */
        .timeline-item::after {
          content: '';
          position: absolute;
          left: -43px; /* Position it on the timeline */
          top: 15px;
          width: 18px;
          height: 18px;
          background-color: #fff;
          border: 3px solid var(--vl-primary);
          border-radius: 50%;
          z-index: 1;
        }
        .timeline-content {
          position: relative;
          border: 1px solid #eee;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
        }
        @media (max-width: 768px) {
          .timeline-container {
            padding-left: 30px;
          }
          .timeline-item::after {
            left: -23px;
          }
        }
      `}</style>
    </>
  )
}