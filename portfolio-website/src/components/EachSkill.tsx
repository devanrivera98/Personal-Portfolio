export default function EachSkill({image, title, doc}: {image:string, title:string, doc:string} ) {
  return (
    <>
      <div className="bg-white lg:w-2/12  rounded-xl flex flex-col items-center m-3">
        <div className="p-2 h-44 lg:h-auto">
          <a href={doc} target="_blank" rel="noopener noreferrer">
            <img className="w-full h-full" src={image} />
          </a>
        </div>
        <a href={doc} target="_blank" rel="noopener noreferrer">
          <h1 className="text-xl">{title}</h1>
        </a>
      </div>
    </>
  )
}
