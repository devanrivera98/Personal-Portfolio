export default function EachSkill({image, title}: {image:string, title:string} ) {
  return (
    <>
      <div className="bg-white lg:w-2/12  rounded-xl flex flex-col items-center m-3">
        <div className="p-2 h-44 lg:h-auto">
          <img className="w-full h-full" src={image} />
        </div>
        <h1 className="text-2xl">{title}</h1>
      </div>
    </>
  )
}
