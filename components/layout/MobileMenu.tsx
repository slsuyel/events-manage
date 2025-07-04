'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
    const [isAccordion, setIsAccordion] = useState<number | null>(null);

    const menuItems:any = [
        { title: 'Home', link: '/' },
        { title: 'About Event', link: '/about' },
        { title: 'Speakers', link: '/speakers', },
        { title: 'Event Schedule', link: '/event-schedule' },
        { title: 'Register Now', link: '/contact' }
    ];

    const handleAccordion = (key: number) => {
        setIsAccordion(prevState => prevState === key ? null : key);
    }

    return (
        <div>
            <div className="mobile-header mobile-haeder1 d-block d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/"><img src="/assets/img/logo/logo1.png" alt="" /></Link>
                            </div>
                            <div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars-staggered" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mobile-sidebar mobile-sidebar1 ${isMobileMenu ? 'mobile-menu-active' : ''}`}>
                <div className="logosicon-area">
                    <div className="logos">
                        <img src="/assets/img/logo/logo2.png" alt="" />
                    </div>
                    <div className="menu-close" onClick={handleMobileMenu}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                </div>
                <div className="mobile-nav mobile-nav1">
                    <ul className="mobile-nav-list nav-list1">
                        {menuItems.map((item:any, index:number) => (
                            <li key={index} className={item.subMenu ? 'has-sub hash-has-sub' : ''}>
                                <div 
                                    className={`submenu-button ${isAccordion === index + 1 ? "submenu-opened" : ""}`}
                                    onClick={() => item.subMenu && handleAccordion(index + 1)}
                                    style={{ cursor: 'pointer' }} // Make it clear the entire area is clickable
                                >
                                    <Link href={item.link} className="hash-nav">{item.title}</Link>
                                </div>
                                {item.subMenu && (
                                    <ul className={`sub-menu ${isAccordion === index + 1 ? "open-sub" : ""}`} style={{ display: `${isAccordion === index + 1 ? "block" : "none"}` }}>
                                        {item.subMenu.map((subItem:any, subIndex:number) => (
                                            <li key={subIndex}>
                                                <Link href={subItem.link} className="hash-nav">{subItem.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="allmobilesection">
                        <Link href="//contact" className="vl-btn1">Contact Now</Link>
                        <div className="single-footer">
                            <h3>Contact Info</h3>
                            <div className="footer1-contact-info">
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <span><i className="fa-solid fa-phone-volume" /></span>
                                    </div>
                                    <div className="contact-info-text">
                                        <Link href="//tel:+8801305288721">+8801305288721 (Rafi)</Link>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <span><i className="fa-solid fa-phone-volume" /></span>
                                    </div>
                                    <div className="contact-info-text">
                                        <Link href="//tel:+8801620472765">+8801620472765 (Jubayer)</Link>
                                    </div>
                                </div>
                                <div className="single-footer">
                                    <h3>Our Location</h3>
                                    <div className="contact-info-single">
                                        <div className="contact-info-icon">
                                            <span><i className="fa-solid fa-location-dot" /></span>
                                        </div>
                                        <div className="contact-info-text">
                                            <Link href="//mailto:nssbd2025@gmail.com">Dhaka & Chattogram, Bangladesh</Link>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
