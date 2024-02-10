export default function EachProject({ title, image, url, description } : {title:string, image:string, url:string, description:string }) {


    return (
      <>
        <div className="md:w-1/3 border-4 border-blue-200 m-5 rounded">
          <h2 className="text-2xl pl-1 bg-lightBlue">{title}</h2>
          <div className="h-52 md:h-64">
            <img className="w-full h-full object-cover" src={image} />
          </div>
          <div className="px-4">
            <div className="py-3 flex justify-center">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="border border-lightGreen hover:bg-green-400 hover:text-white text-lightGreen rounded p-1">Link to Delopyment</button>
              </a>
            </div>
            <p className="text-center">{description}</p>
            <div className="flex py-3 flex-wrap justify-evenly">
              <div className="pill-button w-1/4">
                <p>React</p>
              </div>
              <div className="pill-button w-1/4">
                <p>React</p>
              </div>
              <div className="pill-button w-1/4">
                <p>React</p>
              </div>
              <div className="pill-button w-1/4">
                <p>React</p>
              </div>
              <div className="pill-button w-1/4">
                <p>React</p>
              </div>

            </div>
          </div>
        </div>
      </>
    )
}
