
import Link from 'next/link';

export default function Header7({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {

    // This is an example of a dynamic store or state holding the menu items
    const menuItems = [
        { title: 'Home', link: '/' },
        { title: 'About Event', link: '/about' },
        { title: 'Patrons', link: '/speakers' },
        { title: 'Event Schedule', link: '/event-schedule' },
        { title: 'Register Now', link: '/contact' },
    ];

    return (
        <>
            <header>
                <div className={`header-area homepage7 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
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
