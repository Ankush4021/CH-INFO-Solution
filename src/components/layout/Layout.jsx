import Navbar from "./Navbar"
import Footer from "./Footer"
import WhatsAppButton from "../ui/WhatsAppButton"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className=" bg-white text-gray-800 min-h-screen ">{children}
                <WhatsAppButton />
            </main>

            <Footer />
        </>
    )
}

export default Layout
