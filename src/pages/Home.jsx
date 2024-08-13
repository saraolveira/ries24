import Hero24 from "../components/RIES24/Hero24.jsx"
import Description from "../components/Description.jsx"
import PremiosSlider from "../components/PremiosSlider.jsx"
import Ediciones from "../components/Ediciones.jsx"

const Home = () => {
    document.documentElement.style.setProperty("--color1", "rgba(0,173,238,1)")
    document.documentElement.style.setProperty(
        "--color2",
        "rgba(183,233,114,1)"
    )
    document.title = "Fórum RIES"
    return (
        <>
            <Hero24 />
            <div className="relative z-10 bg-gradient-to-r from-azul to-verde">
                <Description />
                <Ediciones />
                <PremiosSlider />
            </div>
        </>
    )
}

export default Home
