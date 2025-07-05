
import Image from 'next/image';
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
                <div style={{backgroundColor:'#162F57'}} className={`header-area homepage7 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className=" d-flex align-items-center">
                                        {/* <Link href="/"><Image width={270} height={80} src="/assets/img/logo/w-bg.png" alt="" /></Link> */}
                                       
                                        <Image width={100} height={100} src="/assets/img/logo/no-bg-lll.png" alt="" />
                                        <Link href={`/`} className=' text-white py-3 fw-bold fs-3'>BNSS 2025</Link>
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
