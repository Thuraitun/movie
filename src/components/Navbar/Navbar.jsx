const Navbar = () => {
  return (
    <div className="py-4 bg-gray-900 text-white">
      <nav className="flex items-center justify-between max-w-[1500px] mx-auto">
        <div className="">
            <h1 className="text-3xl text-red-500 font-bold uppercase">Movie</h1>
        </div>
        <ul className="flex space-x-5">
            <li className="">Popular</li>
            <li className="">Incoming</li>
        </ul>
        <form className="flex space-x-2">
            <input type="text" className="border-b border-b-gray-300 bg-transparent focus:outline-none px-2" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </form>
      </nav>
    </div>
  )
}

export default Navbar
