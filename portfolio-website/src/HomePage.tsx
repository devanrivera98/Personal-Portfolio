import AboutSection from "./AboutSection"
import MyFooter from "./MyFooter"
import MyProjects from "./MyProjects"
import TechSkills from "./TechSkills"
export default function HomePage() {



  return (
    <>
    <div id="home">
      <div id="home-1" className="background-style text-start pt-5 mx-auto flex justify-center md:flex-row">
        <div className="w-1/2 custom-homepage">
          <h1 className="text-xl text-lightGreen pb-3 text-center md:text-start">Hello, my name is</h1>
          <p className="md:text-5xl text-3xl pb-3 text-center md:text-start">Devan Rivera.</p>
          <p className="md:text-5xl text-3xl text-lightBlue pb-5 text-center md:text-start">I Transform Ideas into Pixels.</p>
          <div className="flex md:flex-row flex-col items-center">
            <img src="react.png"/>
            <img src="javascript.png" />
            <img src="tailwind.png" />
            <img src="typescript.png"/>
          </div>
            <p className="py-5 md:mr-20 text-center md:text-start text-2xl">I am a Los Angeles based Front End Developer skilled in building user-centric interfaces with React, showcasing diverse personal and freelance projects.</p>
          <div className="flex justify-center md:justify-start pt-5 pb-5 md:pb-0 w-full homepage-icons">
              <a className="px-5 flex items-center border-2 border-lightGreen hover:bg-green-400 hover:text-white rounded text-lightGreen h-12" href="Devan-Rivera-Resume-2024.pdf" download target="_blank" rel="noopener noreferrer">Resume</a>
            <div className="flex w-12 mx-2">
              <a href="https://www.linkedin.com/in/devanrivera/" target="_blank" rel="noopener noreferrer">
                  <img className="rounded linkedin border border-lightGreen hover:border-white h-12" src="custom-linkedi.png" alt="linkedin-icon" />
              </a>
            </div>
            <div className="flex w-12 mx-1">
              <a href="https://github.com/devanrivera98" target="_blank" rel="noopener noreferrer">
                <img className="rounded border-2 border-lightGreen hover:border-white h-12" src="github-icon1.png" alt="github-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutSection/>
      <MyProjects/>
      <TechSkills />
      <MyFooter/>
    </div>
    </>
  )
}
