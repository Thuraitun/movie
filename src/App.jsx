import { Outlet } from "react-router-dom"
import { Header, Navbar } from "./components"

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}

export default App
