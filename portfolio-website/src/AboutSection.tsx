export default function AboutSection() {

  return (
    <>
      <div id="about" className="bg-lightBlue flex flex-col">
        <h1 className="text-3xl text-center py-7 underline underline-offset-4">About Me</h1>
        <div className="md:px-9 flex flex-col md:flex-row  pb-7">
          <div className="flex row justify-center h-full items-center md:w-1/3 my-auto pb-7">
            <img className="portrait rounded-xl" src="portrait.JPG" alt="portrait photo" />
          </div>
          <div className="md:w-2/3 w-3/4 mx-auto md:pt-0 text-center md:text-start">
            <p className="md:mx-9 about-text">I'm Devan Rivera, a dedicated software engineer focused on creating innovative web solutions that prioritize user experience. My work spans across various projects, from engineering responsive landing pages to developing complex web applications, all aimed at solving real-world problems and driving engagement. With a strong proficiency in React, JavaScript, and modern CSS frameworks, I bring both creativity and technical expertise to every project.</p>
            <p className="md:mx-9 about-text pt-3">My approach to development is both methodical and creative, ensuring efficient problem-solving and high-quality outcomes. I continuously seek opportunities to learn and adapt, always staying current with the latest technologies. I thrive in collaborative environments and am eager to contribute to a team where I can leverage my skills to drive impactful results. Explore my portfolio to see examples of my work, and feel free to reach out to discuss potential collaborations.</p>
          </div>
        </div>
      </div>
    </>
  )
}
