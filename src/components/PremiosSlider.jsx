import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import data from "../data/awards.json"
import Premio3D from "./Premio3D.jsx"

const PremioSlide = ({ award, project, entity, web, logo }) => {
    const { t, i18n } = useTranslation("common")

    return (
        <div className="gap-4 xl:gap-6 grid grid-cols-1 bg-blanco24 rounded-3xl w-full font-body text-center">
            <p className="xl:mt-10 font-bold font-title text-2xl text-verde xl:text-4xl">
                {t(award)}
            </p>
            <div className="text-sm xl:text-xl">
                <p>{project}</p>
                <a
                    href={web}
                    target="_blank"
                    className="font-bold text-azul hover:text-verde transition-colors duration-300"
                >
                    {entity}
                </a>
            </div>
            <img
                className="right-4 xl:right-8 bottom-4 xl:bottom-8 absolute w-20 xl:w-40"
                src={logo}
            />
        </div>
    )
}

const PremiosSlider = () => {
    const awards = data.awards
    const { t, i18n } = useTranslation("common")

    return (
        <div className="items-center gap-10 grid grid-cols-1 lg:grid-cols-2 xl:px-32 py-20 lg:p-8 xl:pt-24 w-full overflow-x-hidden">
            <div className="h-[40svh] lg:h-[90svh]">
                <Premio3D />
            </div>

            <div className="flex flex-col items-center gap-10">
                <div className="w-full">
                    <Swiper
                        effect={"coverflow"}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 30,
                            depth: 100,
                            modifier: 5,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                    >
                        {awards.map((award, i) => (
                            <SwiperSlide
                                key={i}
                                className="bg-blanco24 shadow-[0_8px_20px_0_rgba(0,173,238,0.2)] p-8 rounded-3xl w-9/12 h-[36svh] lg:h-[40svh]"
                            >
                                <PremioSlide
                                    award={award.award}
                                    project={award.project}
                                    entity={award.entity}
                                    web={award.web}
                                    logo={award.logo}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Link
                    to="/premios"
                    className="border-4 bg-blanco24 hover:bg-transparent px-6 py-1 border-blanco24 rounded-full font-bold font-title text-center text-verde lg:text-2xl hover:text-blanco24 uppercase transition-colors duration-300"
                >
                    {t("awards.cta")}
                </Link>
            </div>
        </div>
    )
}

export default PremiosSlider
