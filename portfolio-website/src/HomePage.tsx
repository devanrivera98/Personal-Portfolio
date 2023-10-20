
export default function HomePage() {



  return (
    <div>
      <div className="background-style text-center pt-5">
        <h1 className="text-3xl">Hello, I'm Devan Rivera</h1>
        <p className="pt-5">A Software Engineer from the vibrant city of Los Angeles, California, fueled by a boundless passion for creating innovative solutions.</p>
        <div className="flex justify-center pt-5">
          <button className="px-2 bg-blue-500 hover:bg-blue-700 rounded">Download CV</button>
          <p className="px-2">LinkedIn</p>
          <p className="px-2">Github</p>
        </div>
        <div className="p-6 flex justify-center">
          <img className="w-500" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="stock image" />
        </div>
      </div>
    </div>
  )
}
