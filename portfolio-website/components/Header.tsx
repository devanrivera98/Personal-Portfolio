
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-scroll";


export default function Header() {

  const [isOpen,setIsOpen] = useState<boolean>(false);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleNavToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileToggleClick = () => {
    if (windowWidth < 768) {
      setIsOpen(!isOpen)
    }
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
  // Now it runs whenever windowWidth changes

  useEffect(() => {
    // Remove the "open" class when the window size is less than 720px
    if (windowWidth > 768) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  return (
    <>
      <header className="header-background bg-darkBlue text-lightBlue">
        <div className="container">
          <div>
            <h2 className="text-2xl logo hover:underline">DevPort</h2>
            <div onClick={handleNavToggleClick} className="nav-toggle" id="navToggle">
              <img id="hamburger" className={isOpen ? "hidden" : ""} src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/hamburger.svg" alt="hamburger-menu" />
              <img className={isOpen ? "" : "hidden"} src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/close.svg" alt="hamburger-menu" />
            </div>
          </div>
          <nav className={isOpen ? "open" : ""}>
            <ul>
              <li>
                <Link onClick={handleMobileToggleClick} to="home" spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:underline" href="#">Home
                </Link>
              </li>
              <li>
                <Link onClick={handleMobileToggleClick} to="about" spy={true}
                smooth={true}
                offset={-100}
                duration={500} className="hover:underline" href="#">About
                </Link>
              </li>
              <li>
                <Link onClick={handleMobileToggleClick} to="projects" spy={true}
                smooth={true}
                offset={50}
                duration={500} className="hover:underline" href="#">Projects
                </Link>
              </li>
              <li>
                <Link onClick={handleMobileToggleClick} to="contact" spy={true}
                smooth={true}
                offset={50}
                duration={500} className="hover:underline" href="#">Contact
                </Link>
              </li>
              <li>
                <Link onClick={handleMobileToggleClick} to="/" spy={true}
                smooth={true}
                offset={50}
                duration={500} className="hover:underline" href="#">Download CV
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}
