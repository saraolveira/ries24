import { useTranslation } from "react-i18next"
import Icono from "./Icono.jsx"

const EditionPage = ({ title, logo, color, image, links, max }) => {
    const { t, i18n } = useTranslation(["editions"])

    if (image) {
        return (
            <div
                className={`mt-20 p-3.5 lg:p-8 xl:p-10 w-screen min-h-[calc(100svh-5rem)] bg-gradient-to-r ${color} flex flex-col justify-center items-center gap-6 text-center overflow-hidden relative`}
            >
                <div className="flex flex-col items-center">
                    <div className="bg-blanco24 px-10 py-8 rounded-t-3xl w-64">
                        <img src={logo} className="z-10 w-64" />
                    </div>
                    <div className="bg-blanco24 p-3 rounded-[2rem]">
                        <img
                            src={image}
                            className="z-10 rounded-3xl w-[90vw] lg:w-[50vw]"
                        />
                    </div>
                </div>

                <h2 className="z-10 mb-6 font-bold font-title text-4xl text-blanco24">
                    {t(title)}
                </h2>
                <div
                    className={`grid auto-rows-fr auto-cols-fr grid-cols-2 items-center gap-6 ${max} z-10 `}
                >
                    {links}
                </div>
                <Icono />
            </div>
        )
    }

    return (
        <div
            className={`mt-20 p-3.5 lg:p-8 xl:p-10 w-screen h-[calc(100svh-5rem)] bg-gradient-to-r ${color} flex flex-col justify-center items-center gap-6 text-center overflow-hidden relative`}
        >
            <div className="bg-blanco24 px-10 py-8 rounded-3xl">
                <img src={logo} className="z-10 w-64" />
            </div>
            <h2 className="z-10 mb-6 font-bold font-title text-4xl text-blanco24">
                {t(title)}
            </h2>
            <div
                className={`grid auto-rows-fr auto-cols-fr grid-cols-2 items-center gap-6 ${max} z-10 `}
            >
                {links}
            </div>
            <Icono />
        </div>
    )
}

export default EditionPage
