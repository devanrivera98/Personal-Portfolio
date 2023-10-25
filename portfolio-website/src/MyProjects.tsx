export default function MyProjects() {
  return (
    <>
    <div>
      <h1 className="text-3xl text-center py-5">My Projects</h1>
    </div>
    <div className="flex flex-wrap">
      <div className="sm:w-1/2 px-2 border border-blue-500">
        <h2 className="text-2xl">BookPalace</h2>
        <div>
            <img src="book-store-photo.png" />
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
        <div className="sm:w-1/2 px-2  border border-blue-500">
        <h2 className="text-2xl">WatchList</h2>
        <div>
          <img src="book-store-photo.png" />
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
    </>
  )
}
