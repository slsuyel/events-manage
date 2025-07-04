import Link from 'next/link'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {

    const menuItems = [
        {
            title: 'Home',
            link: '/#',
            subMenu: [
                { text: 'Eventify-Homepage 01', demoLink: '/', imgSrc: '/assets/img/all-images/demo/demo-img1.png' },
                { text: 'Eventify-Homepage 02', demoLink: '/index2', imgSrc: '/assets/img/all-images/demo/demo-img2.png' },
                { text: 'Eventify-Homepage 03', demoLink: '/index3', imgSrc: '/assets/img/all-images/demo/demo-img3.png' },
                { text: 'Eventify-Homepage 04', demoLink: '/index4', imgSrc: '/assets/img/all-images/demo/demo-img4.png' },
                { text: 'Eventify-Homepage 05', demoLink: '/index5', imgSrc: '/assets/img/all-images/demo/demo-img5.png' },
            ]
        },
        {
            title: 'About Event',
            link: '/about',
        },
        {
            title: 'Speakers',
            link: '/speakers',
            
        },
        {
            title: 'Schedule',
            link: '/event-schedule',
           
        },
        {
            title: 'Register Now',
            link: '/contact',
           
        },
    ];

    return (
        <>
            <header>
                <div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/img/logo/logo1.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            {menuItems.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.link}>{item.title}</Link>
                                                    {item.subMenu && (
                                                        <div className="tp-submenu">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="all-images-menu">
                                                                        {item.subMenu.map((subItem, subIndex) => (
                                                                            <div className="homemenu-thumb" key={subIndex}>
                                                                                <div className="img1">
                                                                                    <img src={'/assets/img/all-images/demo/demo-img1.png'} alt="" />
                                                                                </div>
                                                                                <div className="homemenu-btn">
                                                                                    <Link className="vl-btn1" href={subItem.demoLink}>View Demo </Link>
                                                                                </div>
                                                                                <div className="homemenu-text">
                                                                                    <Link href={subItem.demoLink}>{subItem.text}</Link>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="btn-area">
                                        <div className="search-icon header__search header-search-btn" onClick={handleSearch}>
                                            <a><img src="/assets/img/icons/search1.svg" alt="" /></a>
                                        </div>
                                        <ul>
                                            <li><Link href="/#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                             
                                            <li><Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                            <li><Link href="/#" className="m-0"><i className="fa-brands fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className={`header-search-form-wrapper ${isSearch ? 'open' : ''}`}>
                                        <div className="tx-search-close tx-close" onClick={handleSearch}><i className="fa-solid fa-xmark" /></div>
                                        <div className="header-search-container">
                                            <form role="search" className="search-form">
                                                <input type="search" className="search-field" placeholder="Search …" name="s" />
                                                <button type="submit" className="search-submit"><img src="/assets/img/icons/search1.svg" alt="" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    {isSearch && <div className="body-overlay active" onClick={handleSearch} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
