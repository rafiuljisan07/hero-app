import { Outlet } from "react-router"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function MainLayer() {
  return (
    <>
      <Navbar />
      <div className="my-16">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayer
