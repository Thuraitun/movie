import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {

  const [searchKey, setSearchKey] = useState('');
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`search/${searchKey}`)
  }

  return (
    <div className="py-4 bg-gray-900 text-white sticky top-0 z-20">
      <nav className="md:flex md:items-center md:justify-between max-w-[1500px] mx-auto px-4 space-y-4 md:space-y-0">
        <div className="flex justify-center items-center space-x-2">
            <Link to="/" className="text-3xl text-red-500 font-bold uppercase">Movie</Link>
            <span className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[35px] h-[35px] text-red-500">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
              </svg>
            </span>
        </div>
        <ul className="flex justify-center space-x-5">
            <li className=""><NavLink to="/">Popular</NavLink></li>
            <li className=""><NavLink to="/incoming">Incoming</NavLink></li>
        </ul>
        <form className="flex justify-center space-x-2" onSubmit={handleSearch}>
            <input value={searchKey} onChange={e => setSearchKey(e.target.value)} type="text" className="border-b border-b-gray-300 bg-transparent focus:outline-none px-2" />
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
        </form>
      </nav>
    </div>
  )
}

export default Navbar
