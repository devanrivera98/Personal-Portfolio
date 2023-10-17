
import { Outlet } from "react-router-dom"


export default function Header() {

  return (
    <>
      <header className="background-style">
        <div className="navbar flex items-center justify-between">
          <ul className="flex items-center space-x-4">
            <li>Devan</li>
            <li className="hover:bg-sky-600 hover:underline hover:underline-offset-7">Home</li>
            <li>Portfolio</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
          <button className="bg-blue-600 rounded-full p-2">Download CV</button>
        </div>
        <Outlet />
      </header>
    </>
  )
}
