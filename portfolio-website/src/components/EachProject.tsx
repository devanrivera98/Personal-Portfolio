export default function EachProject({ title, image, url, description, skills } : {title:string, image:string, url:string, description:string, skills: string[] }) {

  let skillMap = null;
  if (skills) {
    skillMap = skills.map((skill, index) =>
      <div key={String(index)} className="pill-button flex justify-center  items-center">
        <p className="pill-text">{skill}</p>
      </div>
    )
  }
    return (
      <>
        <div className="lg:w-1/3 md:w-2/3 border-4 border-blue-200 m-5 rounded flex flex-col">
          <h2 className="text-2xl pl-1 bg-lightBlue">{title}</h2>
          <div className="h-52 md:h-64">
            <img className="w-full h-full object-cover" src={image} />
          </div>
          <div className="px-4 flex flex-col flex-1">
            <div className="py-3 flex justify-center">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="border border-lightGreen hover:bg-green-400 hover:text-white text-lightGreen rounded p-1">Link to Deployment</button>
              </a>
            </div>
            <p className="text-center">{description}</p>
            <div className="flex py-3 flex-wrap justify-evenly my-auto">
              {skillMap}
            </div>
          </div>
        </div>
      </>
    )
}
