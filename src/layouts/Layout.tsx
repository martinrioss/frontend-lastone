import Footer from './Footer'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function Layout (): JSX.Element {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
export default Layout
