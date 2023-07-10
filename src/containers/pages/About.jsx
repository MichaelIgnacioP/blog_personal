import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { useEffect } from "react"
import Header from "components/about/Header"
import TestStats from "components/about/TestStats"
import Images from "components/about/Images"
import Clients from "components/about/Clients"
import OurAchievements from "components/about/OurAchievements"
import Features from "components/about/Features"
import Team from "components/about/Team"
import CTA from "components/about/CTA"
import { Helmet } from "react-helmet-async"

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <Helmet>
                <title>Murkiva | Acerca de Nosotros</title>
                <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
                <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.murkiva.com/" />
                <meta name="author" content='Murkiva' />
                <meta name="publisher" content='Murkiva' />

                {/* Social Media Tags */}
                <meta property="og:title" content='Murkiva | Software Agency' />
                <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
                <meta property="og:url" content="https://www.murkiva.com/" />
                <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

                <meta name="twitter:title" content='Murkiva | Software Agency' />
                <meta
                    name="twitter:description"
                    content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
                />
                <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar />
            <div className="pt-28">
                <Header />
                <TestStats />
                <Images />
                <Clients />
                <OurAchievements />
                <Features />
                <Team />
                <CTA />
            </div>
            <Footer />
        </Layout>
    )
}

export default About