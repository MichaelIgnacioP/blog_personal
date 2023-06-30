import Layout from "hocs/layouts/Layout"
import Header from "components/home/Header"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"

function Home() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
            </div>
            <Footer />
        </Layout>
    )
}

export default Home