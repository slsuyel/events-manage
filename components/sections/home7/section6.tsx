"use client"

import { useState } from "react"

export default function ModernEventSchedule() {
  const [activeTab, setActiveTab] = useState(1)

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
  ]

  return (
    <div className="event-schedule-container">
      <div className="schedule-header">
        <h2>Event Schedule</h2>
        <p>Explore our comprehensive 3-day event program</p>
      </div>

      <div className="tab-navigation">
        {eventData.map((event, index) => (
          <button
            key={index}
            className={`tab-button  ${activeTab === index + 1 ? "active" : ""}`}
            onClick={() => setActiveTab(index + 1)}
          >
            <div className="tab-day">{event.day}</div>
            <div className="tab-date">
              <span className="date-day">{event.date.split(" ")[0]}</span>
              <span className="date-month-year">
                {event.date.split(" ")[1]} {event.date.split(" ")[2]}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="schedule-content">
        {eventData.map((event, index) => (
          <div key={index} className={`schedule-day ${activeTab === index + 1 ? "active" : ""}`}>
            <div className="schedule-table">
              <div className="table-header">
                <div className="header-time">Time</div>
                <div className="header-event">Event Details</div>
              </div>

              {event.schedule.map((session, idx) => (
                <div key={idx} className="table-row">
                  <div className="time-cell">
                    <span className="time-badge">{session.time}</span>
                  </div>
                  <div className="event-cell">
                    <h4 className="event-title">{session.title}</h4>
                    {session.panel && (
                      <div className="event-panel">
                        <strong>Panel:</strong> {session.panel}
                      </div>
                    )}
                    {session.additionalInfo && (
                      <div className="event-info">
                        <strong>Additional Info:</strong> {session.additionalInfo}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
    .event-schedule-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      font-family: "Figtree", 
    }

    .schedule-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .schedule-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .schedule-header p {
      font-size: 1.1rem;
      color: #666;
      margin: 0;
    }

    .tab-navigation {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .tab-button {
      background: white;
      border: 2px solid #e1e5e9;
      border-radius: 12px;
      padding: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 160px;
      text-align: center;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05); /* Reduced shadow */
    }

    .tab-button:hover {
      border-color: #667eea;
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1); /* Reduced shadow */
    }

    .tab-button.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-color: #667eea;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 3px 12px rgba(102, 126, 234, 0.2); /* Reduced shadow */
    }

    .tab-day {
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      opacity: 0.8;
    }

    .tab-button.active .tab-day {
      opacity: 1;
    }

    .tab-date {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .date-day {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
    }

    .date-month-year {
      font-size: 0.8rem;
      font-weight: 500;
      margin-top: 0.25rem;
    }

    .schedule-content {
      position: relative;
    }

    .schedule-day {
      display: none;
      animation: fadeIn 0.3s ease-in-out;
    }

    .schedule-day.active {
      display: block;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .schedule-table {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); /* Reduced shadow */
      border: 1px solid #e1e5e9;
    }

    .table-header {
      display: grid;
      grid-template-columns: 200px 1fr;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-bottom: 2px solid #e1e5e9;
    }

    .header-time,
    .header-event {
      padding: 1.5rem;
      font-weight: 700;
      font-size: 1.1rem;
      color: #495057;
    }

    .header-time {
      border-right: 1px solid #e1e5e9;
      text-align: center;
    }

    .table-row {
      display: grid;
      grid-template-columns: 200px 1fr;
      border-bottom: 1px solid #f1f3f4;
      transition: background-color 0.2s ease;
    }

    .table-row:hover {
      background-color: #f8f9ff;
    }

    .table-row:last-child {
      border-bottom: none;
    }

    .time-cell {
      padding: 1.5rem;
      border-right: 1px solid #f1f3f4;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fafbfc;
    }

    .time-badge {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.9rem;
      white-space: nowrap;
    }

    .event-cell {
      padding: 1.5rem;
    }

    .event-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
    }

    .event-panel,
    .event-info {
      font-size: 0.9rem;
      color: #666;
      margin-top: 0.5rem;
      line-height: 1.5;
    }

    .event-panel strong,
    .event-info strong {
      color: #495057;
    }

    @media (max-width: 768px) {
      .event-schedule-container {
        padding: 1rem;
      }

      .schedule-header h2 {
        font-size: 2rem;
      }

      .tab-navigation {
        gap: 0.5rem;
      }

      .tab-button {
        min-width: 120px;
        padding: 1rem;
      }

      .table-header,
      .table-row {
        grid-template-columns: 120px 1fr;
      }

      .time-cell,
      .event-cell {
        padding: 1rem;
      }

      .time-badge {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
      }

      .event-title {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .table-header,
      .table-row {
        grid-template-columns: 1fr;
      }

      .time-cell {
        border-right: none;
        border-bottom: 1px solid #f1f3f4;
        background-color: white;
        padding: 0.75rem 1rem;
      }

      .event-cell {
        padding: 0.75rem 1rem 1.5rem 1rem;
      }

      .header-time {
        border-right: none;
        border-bottom: 1px solid #e1e5e9;
      }
    }
`}</style>

    </div>
  )
}
