
import { Outlet } from "react-router-dom"


export default function Header() {

  return (
    <>
      <div className='background-style'>
        <div>
          <div className="navbar">
            <ul>
              <li className="bg-blue-500">Home</li>
              <li>Portfolio</li>
              <li>About Me</li>
              <li>Contact</li>
              <button className="bg-blue-600 rounded-full">Download CV</button>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}
