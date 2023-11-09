export default function AboutSection() {

  return (
    <>
      <div id="about" className="bg-lightBlue">
        <h1 className="text-3xl text-center py-5">About Me</h1>
        <div className="md:px-9 flex flex-col md:flex-row  pb-5">
          <div className="flex justify-center md:w-1/3 md:h-64">
            <img className=" portrait" src="portrait.JPG" alt="portrait photo" />
          </div>
          <div className="md:w-2/3 w-3/4 mx-auto md:pt-0 pt-10">
            <p className="md:mx-9 about-text">Hello! I'm Devan Rivera, a software engineer who never backs down from a challenge.  As a software engineer, my passion for tackling complex problems and crafting innovative solutions has been the driving force behind my journey. I thrive of the opportunity of being able to dive into projects and technologies that expand my comprehension of software engineering. Whether its learning a new framework or picking up a new tool, I am enthusiastic on being able to continuously learn about the tech landscape. </p>
            <p className="md:mx-9 about-text pt-3">Looking ahead, I am excited about the prospect of channeling my skills and enthusiasm into a dynamic team. I believe in fostering collaboration and leveraging collective expertise to drive impactful results. </p>
            <p className="md:mx-9 about-text pt-3">Feel free to explore my projects, where you'll find evidence of my problem-solving abilities and innovative mindset. Don't hesitate to reach out—I'm always open to new opportunities and collaborations! </p>
          </div>
        </div>
      </div>
    </>
  )
}
