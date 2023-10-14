import { Outlet } from "react-router-dom"

export default function Header() {
  return (
    <div className='background-style'>
      <div>
        <div className="navbar">
          <ul>
            <div>
              <h1>DevanCode</h1>
            </div>
            <div>
              <li>Home</li>
              <li>About Me</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <button>Download CV</button>
            </div>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  )

}
