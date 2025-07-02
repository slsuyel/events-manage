import Link from 'next/link'

export default function Section9() {
  const eventData = [
    {
      day: "Day 01",
      date: "16 JUL 2025",
      title: "Inaugural Day & AI Summit",
      speaker: "Prof. Muhammad Mustafa Hussain",
      description: "The opening day of the BEAR Summit 2025 with keynote speeches, panel discussions, and networking opportunities.",
      link: "/event-single",
    },
    {
      day: "Day 02",
      date: "17 JUL 2025",
      title: "Bangladesh National Semiconductor Symposium 2025",
      speaker: "Mr. Faiz Taiyeb",
      description: "This event focuses on the semiconductor ecosystem in Bangladesh, featuring presentations and networking.",
      link: "/event-single",
    },
    {
      day: "Day 03",
      date: "18 JUL 2025",
      title: "Global Semiconductor Leaders Roundtable",
      speaker: "KEPZ Leadership",
      description: "A roundtable discussion with global semiconductor leaders in Chattogram, Bangladesh.",
      link: "/event-single",
    },
  ];

  return (
    <div className="blog7-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="blog-header text-center heading10 space-margin60">
              <h2 className="text-anime-style-3">Leadership in Strategies <br className="d-lg-block d-none" /> For Economic Growth</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {eventData.map((event, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800 + index * 200}>
              <div className="blog1-auhtor-boxarea">
                <div className="img1 image-anime">
                  <img src={`/assets/img/all-images/blog/blog-img${index + 1}.png`} alt={event.title} />
                </div>
                <div className="content-area">
                  <ul>
                    <li>
                      <Link href="/#">
                        <img src="/assets/img/icons/calender1.svg" alt="" />
                        {event.date}
                      </Link>
                    </li>
                    <li className="m-0">
                      <Link href="/#">
                        <img src="/assets/img/icons/user1.svg" alt="" />
                        {event.speaker}
                      </Link>
                    </li>
                  </ul>
                  <div className="space20" />
                  <Link href={event.link}>{event.title}</Link>
                  <div className="space24" />
                  <p>{event.description}</p>
                  <div className="space24" />
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
