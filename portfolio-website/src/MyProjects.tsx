export default function MyProjects() {
  return (
    <div id="projects" className="bg-darkBlue text-white">
    <div >
      <h1 className="text-3xl text-center py-5 underline underline-offset-4">My Projects</h1>
    </div>
    <div className="flex flex-wrap justify-evenly">
      <div className="md:w-1/3 border-4 border-blue-200 m-5 rounded">
          <h2 className="text-2xl pl-1 bg-lightBlue">BookPalace</h2>
          <div className="h-52 md:h-64">
            <img className="w-full h-full object-cover" src="book-store-photo.png" />
        </div>
          <div className="px-2">
            <div className="py-3 flex justify-center">
              <a href="https://book-palace.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
                <button className="border border-lightGreen hover:bg-green-400 hover:text-white text-lightGreen rounded p-1">Link to Delopyment</button>
              </a>
            </div>
            <p className="text-center">Bookplace offers a seamless and immersive online bookstore experience, allowing users to effortlessly browse an extensive collection of books, fostering informed choices through a user-friendly review system. The platform also includes convenient features like a shopping cart and wishlist, enhancing the overall experience of discovering and acquiring favorite reads.</p>
        </div>
      </div>
      <div className="md:w-1/3 border-4 border-blue-200 m-5 rounded">
        <h2 className="text-2xl pl-1 bg-lightBlue">WatchList</h2>
        <div className="h-52 md:h-64">
            <img className="w-full h-full object-cover" alt="hollywood-photo" src="hollywood-image.png" />
        </div>
        <div className="px-2 text-white">
          <div className=" py-3 flex justify-center">
            <a href="https://devanrivera98.github.io/WatchList/" target="_blank" rel="noopener noreferrer">
                <button className="border border-lightGreen hover:bg-green-400 hover:text-white text-lightGreen  rounded p-1">Link to Delopyment</button>
            </a>
          </div>
            <p className="text-center">WatchList is a dynamic front-end application showcasing my adept use of CSS classes, seamlessly integrating JavaScript and local storage for a user-friendly experience in exploring a curated movie catalog. Users can effortlessly search, discover details, and add movies to their personalized list, enhancing navigation for a dynamic and engaging exploration.</p>
        </div>
      </div>
    </div>
    </div>
  )
}
