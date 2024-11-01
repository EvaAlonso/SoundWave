
import { Outlet } from "react-router-dom"
import Home from "../pages/Home/Home"
import Header from "../components/molecules/Header/Header"

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Layout