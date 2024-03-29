
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
            <Link to="home" spy={true}
              smooth={true}
              // offset={1000}
              duration={500}
              className="hover:underline text-2xl logo block" href="#">Devan Rivera</Link>
            <div onClick={handleNavToggleClick} className="nav-toggle" id="navToggle">
              <img id="hamburger" className={isOpen ? "hidden" : ""} src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/hamburger.svg" alt="hamburger-menu" />
              <img id="close-icon" className={isOpen ? "" : "hidden"} src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/close.svg" alt="hamburger-menu" />
            </div>
          </div>
          <nav className={isOpen ? "open" : ""}>
            <ul>
              <li>
                <Link onClick={handleMobileToggleClick} to="home-1" spy={true}
                smooth={true}
                offset={windowWidth > 767 ? 0 : -1000}
                duration={500}
                className="hover:underline" href="#">Home
                </Link>
              </li>
              <li>
                <Link onClick={handleMobileToggleClick} to="about" spy={true}
                smooth={true}
                offset={windowWidth > 767 ? -100 :-950}
                duration={500} className="hover:underline" href="#">About
                </Link>
              </li>
              <li>
                <Link onClick={handleMobileToggleClick} to="projects" spy={true}
                smooth={true}
                offset={windowWidth > 767 ? -110 : -950}
                duration={500} className="hover:underline" href="#">Projects
                </Link>
              </li>
              <li>
                <Link onClick={handleMobileToggleClick} to="skills" spy={true}
                smooth={true}
                offset={windowWidth > 767 ? -100 : -950}
                duration={500} className="hover:underline" href="#">Skills
                </Link>
              </li>
              <li>
                <a className="md:px-5 md:py-1 mx-0 flex justify-center items-center border-2 border-lightGreen hover:bg-green-400 hover:text-white rounded text-lightGreen" href="Devan-Rivera-Resume-2024.pdf" download target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}
