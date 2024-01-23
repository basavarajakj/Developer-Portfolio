
import { useCallback, useEffect, useState } from 'react';
import Logo from '../assets/logo.png';

const navbarLists = [
  {
    id: 1,
    name: "home",
    isActive: true
  },
  {
    id: 2,
    name: "project"
  },
  {
    id: 3,
    name: "resume"
  },
  {
    id: 4,
    name: "about"
  },
  {
    id: 5,
    name: "article"
  },
]

const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const toggleSidebar =  useCallback(
    () => {
      setIsSidebarOpen(!isSidebarOpen)
    },
    [isSidebarOpen],
  );


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }

    }
      window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <header className={`header ${isHeaderActive ? "active" : ""}`}>
      <div className="container">

        <a href="/" className="logo">
          <img src={Logo} alt="Jamel Eusebio" width={48} height={48} className='img-cover'/>
          <p className='title-small'> Jamel Eusebio</p>
        </a>

        <nav className={`navbar  ${isSidebarOpen ? "active" : ""}`}>

          <div className="navbar-top">
            <a href="/" className="logo">
              <img src={Logo} alt="Jamel Eusebio" width={48} height={48} />
              <p className='title-large'> Jamel Eusebio</p>
            </a>

            <button onClick={toggleSidebar} className='nav-toggle-btn' aria-label='close menu'>
              <span className="material-symbols-outlined">close</span>
            </button>

          </div>

          <ul className="navbar-list">

            {navbarLists.map(navList => (
              <li onClick={toggleSidebar} key={navList.id} className='navbar-item'>
                <a href={`#${navList.name}`} className={`navbar-link ${navList.isActive ? "active" : ""}`}>{navList.name}</a>
              </li>
            ))}

          </ul>

          <div className="header-action">
            <button className='btn btn-primary'>Contact</button>
          </div>

        </nav>

        <button onClick={toggleSidebar} className='nav-toggle-btn' aria-label='open menu'>
          <span className="material-symbols-outlined">menu</span>
        </button>

        <div onClick={toggleSidebar} className={`overlay ${isSidebarOpen ? 'active' : ''} `} aria-hidden="true" ></div>
      </div>
    </header>
  )
}

export default Header