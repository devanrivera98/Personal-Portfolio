
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"


export default function Header() {

  const [isOpen,setIsOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleNavToggleClick = () => {
    setIsOpen(!isOpen);
  };

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
    if (windowWidth > 720) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  return (
    <>
      <header>
        <div className="container">
          <div>
            <h2 className="text-2xl logo">DevPort</h2>
            <div onClick={handleNavToggleClick} className="nav-toggle" id="navToggle">
              <img id="hamburger" className={isOpen ? "hidden" : ""} src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/hamburger.svg" alt="hamburger-menu" />
              <img className={isOpen ? "" : "hidden"} src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/close.svg" alt="hamburger-menu" />
            </div>
          </div>
          <nav className={isOpen ? "open" : ""}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Download CV</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}
