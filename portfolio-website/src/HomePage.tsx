import AboutSection from "./AboutSection"
import MyProjects from "./MyProjects"
export default function HomePage() {



  return (
    <div id="home">
      <div className="background-style text-start pt-5 mx-auto flex justify-center md:flex-row">
        <div className="w-1/2 custom-homepage">
          <h1 className="text-xl text-lightGreen pb-3">Hello, my name is</h1>
          <p className="md:text-5xl text-3xl pb-3">Devan Rivera.</p>
          <p className="md:text-5xl text-3xl text-lightBlue pb-5">I Transform Ideas into Pixels.</p>
          <p className="pt-5 md:mr-20 text-start">A Software Engineer from the vibrant city of Los Angeles, California, fueled by a boundless passion for creating innovative solutions.</p>
          <div className="flex justify-start pt-5 w-full homepage-icons">
            <button className="px-2 border-2 border-lightGreen hover:bg-green-400 hover:text-white rounded text-lightGreen">Download CV</button>
            <div className="flex w-12 mx-2">
              {/* <p className="px-2">LinkedIn</p> */}
              <img className="rounded" src="linkedin-icon.jpg" alt="linkedin-icon" />
              {/* <p className="px-2">Github</p> */}
            </div>
            <div className="flex w-12 mx-1">
              <img className="rounded" src="github-icon.jpg" alt="github-icon" />
            </div>
          </div>
        </div>
        {/* <div className="p-6 flex justify-center md:w-1/2 profile-image">
          <img className="w-3/4 md:w-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="stock image" />
        </div> */}
      </div>
      <AboutSection/>
      <MyProjects/>
    </div>
  )
}
