export default function MyProjects() {
  return (
    <div className="bg-darkBlue text-white">
    <div >
      <h1 className="text-3xl text-center py-5">My Projects</h1>
    </div>
    <div className="flex flex-wrap justify-evenly">
      <div className="sm:w-1/3 border-4 border-blue-200 m-5">
          <h2 className="text-2xl  bg-lightBlue">BookPalace</h2>
          <div className="h-52 md:h-64">
            <img className="w-full h-full object-cover" src="book-store-photo.png" />
        </div>
          <div className="px-2">
            <div className="py-3 flex justify-center">
              <a href="https://book-palace.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
                <button className="bg-maroon hover:bg-red-800 rounded p-1">Link to Delopyment</button>
              </a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
        <div className="sm:w-1/3 border-4 border-blue-200 m-5">
        <h2 className="text-2xl bg-lightBlue">WatchList</h2>
        <div className="h-52 md:h-64">
            <img className="w-full h-full object-cover" alt="hollywood-photo" src="hollywood-image.png" />
        </div>
        <div className="px-2">
          <div className=" py-3 flex justify-center">
            <a href="https://devanrivera98.github.io/WatchList/" target="_blank" rel="noopener noreferrer">
            <button className="bg-maroon hover:bg-red-800 rounded p-1">Link to Delopyment</button>
            </a>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
    </div>
  )
}
