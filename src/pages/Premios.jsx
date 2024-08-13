import { useTranslation } from "react-i18next"
import data from "../data/awards.json"
import Premio3D from "../components/Premio3D.jsx"

const Premios = () => {
    const { t, i18n } = useTranslation("common")

    document.title = "Premios RIES"

    const awards = data.awards
    // console.log(awards.filter((award) => award.year == 2021))
    return (
        <div className="lg:gap-10 grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-azul to-verde xl:px-32 xl:py-32 p-3.5 lg:p-8 w-full overflow-x-hidden">
            <div className="h-[70svh] lg:h-[90svh]">
                <div className="lg:left-0 lg:fixed lg:w-1/2">
                    <Premio3D />
                </div>
            </div>
            <div>
                <h2 className="mb-6 font-bold font-title text-4xl text-blanco24">
                    {t("awards.21")}
                </h2>
                <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 auto-rows-fr">
                    {awards
                        .filter((award) => award.year == 2021)
                        .map((award, i) => (
                            <div
                                key={i}
                                className="gap-4 grid grid-cols-1 bg-blanco24 p-6 rounded-3xl font-body text-center"
                            >
                                <p className="font-bold font-title text-2xl text-verde lg:text-3xl">
                                    {t(award.award)}
                                </p>
                                <div>
                                    <p>{award.project}</p>
                                    <a
                                        href={award.web}
                                        target="_blank"
                                        className="font-bold text-azul hover:text-verde transition-colors duration-300"
                                    >
                                        {award.entity}
                                    </a>
                                </div>
                            </div>
                        ))}
                </div>
                <h2 className="mt-20 mb-6 font-bold font-title text-4xl text-blanco24">
                    {t("awards.22")}
                </h2>
                <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 auto-rows-fr">
                    {awards
                        .filter((award) => award.year == 2022)
                        .map((award, i) => (
                            <div
                                key={i}
                                className="gap-4 grid grid-cols-1 bg-blanco24 p-6 rounded-3xl font-body text-center"
                            >
                                <p className="font-bold font-title text-2xl text-verde lg:text-3xl">
                                    {t(award.award)}
                                </p>
                                <div>
                                    <p>{award.project}</p>
                                    <a
                                        href={award.web}
                                        target="_blank"
                                        className="font-bold text-azul hover:text-verde transition-colors duration-300"
                                    >
                                        {award.entity}
                                    </a>
                                </div>
                            </div>
                        ))}
                </div>
                <h2 className="mt-20 mb-6 font-bold font-title text-4xl text-blanco24">
                    {t("awards.23")}
                </h2>
                <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 auto-rows-fr">
                    {awards
                        .filter((award) => award.year == 2023)
                        .map((award, i) => (
                            <div
                                key={i}
                                className="gap-4 grid grid-cols-1 bg-blanco24 p-6 rounded-3xl font-body text-center"
                            >
                                <p className="font-bold font-title text-2xl text-verde lg:text-3xl">
                                    {t(award.award)}
                                </p>
                                <div>
                                    <p>{award.project}</p>
                                    <a
                                        href={award.web}
                                        target="_blank"
                                        className="font-bold text-azul hover:text-verde transition-colors duration-300"
                                    >
                                        {award.entity}
                                    </a>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default Premios
