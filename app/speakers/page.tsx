"use client"
import { useState } from "react";
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image";

export default function Speakers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Dynamic list of speakers
  const images = Array.from({ length: 62 }, (_, index) => `/assets/img/p𝐚𝐭𝐫𝐨𝐧𝐬/${index + 1}.jpg`);

  const handleImageClick = (img: any) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg6.png)' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 m-auto">
                <div className="heading1 text-center">
                  <h1>Our Patrons</h1>
                  <div className="space20" />
                  <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Our Patrons</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*===== TEAM AREA STARTS =======*/}
        <div className="team-sperkers-section-area sp1">
          <div className="container">
            <div className="row">
              {images?.map((img, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="our-team-boxarea">
                    <div className="team-widget-area">
                      <img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
                      <img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
                      <div className="img1">
                        <Image
                          width={600}
                          height={600}
                          src={img || 'https://img.freepik.com/premium-vector/man-is-giving-speech-simple-flat-design-style_995281-5304.jpg'}
                          alt={img}
                          className="team-img4" loading="lazy"
                          onClick={() => handleImageClick(img)} // Trigger modal on image click
                        />
                      </div>
                    </div>
                    <div className="space28" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*===== TEAM AREA ENDS =======*/}

        {/* Modal for displaying clicked image */}
        {showModal && (
          <div className="modal show" tabIndex={-1} style={{ display: 'block' }} onClick={handleCloseModal}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Patron </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src={selectedImage || 'https://img.freepik.com/premium-vector/man-is-giving-speech-simple-flat-design-style_995281-5304.jpg'} alt="Selected Speaker" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        )}

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

      <style jsx>{`
        .img1 img {
          cursor: pointer;
        }

        .modal .close {
          font-size: 2rem;
          color: #000;
          border: none;
          background: none;
          cursor: pointer;
        }

        .modal .close:hover {
          color: #dc3545;
        }
      `}</style>
    </Layout>
  );
}
