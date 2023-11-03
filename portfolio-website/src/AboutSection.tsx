export default function AboutSection() {

  return (
    <>
      <div id="about">
        <h1 className="text-3xl text-center py-5">About Me</h1>
        <div className="px-9 flex flex-col md:flex-row items-center pb-5">
          <div className="flex justify-center md:w-1/3 w-2/3 h-64">
            <img className="object-contain" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="stock image" />
          </div>
          <div className="w-2/3 md:pt-0 pt-10">
            <p className="mx-9 about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </>
  )
}
