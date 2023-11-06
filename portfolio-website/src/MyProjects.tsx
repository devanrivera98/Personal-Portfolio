export default function MyProjects() {
  return (
    <div id="projects" className="bg-darkBlue text-white">
    <div >
      <h1 className="text-3xl text-center py-5">My Projects</h1>
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
            <p>Bookplace is a feature-rich, full-stack application I developed using Bootstrap for a sleek front-end, React for dynamic user interfaces, Express for robust back-end functionality, and PostgreSQL for efficient data management. This platform empowers users to seamlessly explore an extensive library of books, utilizing a sophisticated search engine to discover related products effortlessly. Adding to the experience, Bookplace includes a friendly review and rating system. This way, users can easily navigate and make informed choices, checking out books based on valuable community feedback. Users can enhance their shopping experience by adding items to their cart or saving them to a wishlist for future consideration. The wishlist feature allows users to manage their selections, offering the flexibility to delete items or seamlessly transfer them to the cart. This project aimed to showcase not only a seamless online store but also the integration of cutting-edge technologies to provide users with a responsive and enjoyable platform for discovering and acquiring their favorite reads.</p>
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
            <p>WatchList is a dynamic front-end application that showcases my adept use of CSS classes to create an engaging and personalized layout. By seamlessly integrating JavaScript and harnessing the capabilities of local storage, WatchList offers users a seamless experience in exploring a meticulously curated catalog of movies tailored to their preferences. Users can effortlessly search through the movie catalog, uncovering crucial details such as ratings, duration, and average critic scores. The user-friendly interface allows enthusiasts to dive deep into comprehensive movie descriptions. If a particular movie captures their interest, they can easily add it to their personalized list, thanks to the interactive features powered by JavaScript. The core objective of WatchList is to provide movie enthusiasts with a streamlined and user-friendly navigation experience. JavaScript plays a key role in enhancing the interactivity and responsiveness of the application, making the exploration of the movie catalog a dynamic and engaging experience.</p>
        </div>
      </div>
    </div>
    </div>
  )
}
