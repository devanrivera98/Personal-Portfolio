import EachProject from "./components/EachProject"

export default function MyProjects() {
  return (
    <div id="projects" className="bg-darkBlue text-white">
    <div >
      <h1 className="text-3xl text-center py-5 underline underline-offset-4">My Projects</h1>
    </div>
    <div className="flex flex-wrap justify-around">
        <EachProject title={'Book Palace'} url={'https://book-palace.azurewebsites.net/'} image={'book-store-photo.png'} description={'Bookplace offers a seamless and immersive online bookstore experience, allowing users to effortlessly browse an extensive collection of books, fostering informed choices through a user-friendly review system. The platform also includes convenient features like a shopping cart and wishlist, enhancing the overall experience of discovering and acquiring favorite reads.'} skills={['React', 'JavaScript', 'CSS3', 'HTML5', 'BootStrap', 'Node.js', 'Express', 'PostgreSQL']} />
        <EachProject title={'Anytime Promotion'} url={'https://anytime-promotion.netlify.app/'} image={'anytime-promotion-banner.png'} description={`
        Anytime Promotion was designed and customized for a small business, empowering users to seamlessly access the business's database that I integrated. Through intuitive features, visitors can effortlessly connect with the business, while also gaining insights into the owner's persona for a more personal, engaging, efficient, and user-friendly experience.`} skills={['React', 'TypeScript', 'Tailwind CSS', 'CSS3', 'HTML5', 'Caspio', 'Netlify', 'Vite']} />
        <EachProject title={'Watchlist'} url={'https://devanrivera98.github.io/WatchList/'} image={'hollywood-image.png'} description={'WatchList is a dynamic front-end application showcasing my adept use of CSS classes, seamlessly integrating JavaScript and local storage for a user-friendly experience in exploring a curated movie catalog. Users can effortlessly search, discover details, and add movies to their personalized list, enhancing navigation for a dynamic and engaging exploration.'} skills={['JavaScript', 'CSS3', 'HTML5', 'DOM Manipulation', 'IMDB API']} />
    </div>
    </div>
  )
}
