import AboutSection from "./AboutSection"
import ContactForm from "./ContactForm"
import MyFooter from "./MyFooter"
import MyProjects from "./MyProjects"
import { Helmet } from 'react-helmet-async';
export default function HomePage() {



  return (
    <>
    <div id="home">
        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>Devan Rivera's Portfolio</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="title" content="Devan Rivera's Portfolio" />
          <meta name="description" content="Welcome to my personal portfolio! Explore my projects and feel free to get in touch. I'm excited to share my work with you – take a look!" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://devanrivera.netlify.app/" />
          <meta property="og:title" content="Devan Rivera's Portfolio" />
          <meta property="og:description" content="Welcome to my personal portfolio! Explore my projects and feel free to get in touch. I'm excited to share my work with you – take a look!" />
          <meta property="og:image" content="/meta-image.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://devanrivera.netlify.app/" />
          <meta property="twitter:title" content="Devan Rivera's Portfolio" />
          <meta property="twitter:description" content=" Welcome to my personal portfolio! Explore my projects and feel free to get in touch. I'm excited to share my work with you – take a look!" />
          <meta property="twitter:image" content="/meta-image.png" />
        </Helmet>
      <div id="home-1" className="background-style text-start pt-5 mx-auto flex justify-center md:flex-row">
        <div className="w-1/2 custom-homepage">
          <h1 className="text-xl text-lightGreen pb-3">Hello, my name is</h1>
          <p className="md:text-5xl text-3xl pb-3">Devan Rivera.</p>
          <p className="md:text-5xl text-3xl text-lightBlue pb-5">I Transform Ideas into Pixels.</p>
          <p className="py-5 md:mr-20 text-start text-2xl">A Software Engineer from the vibrant city of Los Angeles, California, fueled by a boundless passion for creating innovative solutions.</p>
          <div className="flex justify-start pt-5 w-full homepage-icons">
            <a className="px-5 flex items-center border-2 border-lightGreen hover:bg-green-400 hover:text-white rounded text-lightGreen" href="https://flowcv.com/resume/chbnor1vje" target="_blank" rel="noopener noreferrer">Resume</a>
            <div className="flex w-12 mx-2">
              <a href="https://www.linkedin.com/in/devanrivera/" target="_blank" rel="noopener noreferrer">
                <img className="rounded linkedin border border-lightGreen hover:border-white" src="custom-linkedi.png" alt="linkedin-icon" />
              </a>
            </div>
            <div className="flex w-12 mx-1">
              <a href="https://github.com/devanrivera98" target="_blank" rel="noopener noreferrer">
                <img className="rounded border-2 border-lightGreen hover:border-white" src="github-icon1.png" alt="github-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutSection/>
      <MyProjects/>
      <ContactForm/>
      <MyFooter/>
    </div>
    </>
  )
}
