import { Outlet } from "react-router"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { ToastContainer } from "react-toastify"

function MainLayer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="my-16 flex-1">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default MainLayer
