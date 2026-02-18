import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className=" bg-white text-gray-800 min-h-screen ">{children}</main>
            <Footer />
        </>
    )
}

export default Layout
