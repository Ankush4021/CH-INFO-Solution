import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/Home"
import Services from "../pages/Services"
import About from "../pages/About"
import Contact from "../pages/Contact"
import ServiceDetails from "../pages/ServiceDetails";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services/:slug" element={<ServiceDetails />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter
