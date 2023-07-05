import { Outlet } from "react-router-dom"
import {NavBar , Footer} from '../components/imports'

const Home = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Home