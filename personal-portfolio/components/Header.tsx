import { Outlet } from "react-router-dom"

export default function Header() {
  return (
    <div className='background-style'>
      <div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  )

}
