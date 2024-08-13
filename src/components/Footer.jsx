import { useTranslation } from "react-i18next"
import RRSS from "./RRSS.jsx"

const Footer = () => {
    const { t, i18n } = useTranslation(["common"])
    return (
        <div className="flex justify-between border-verde bg-gradient-to-r from-azul to-verde p-3.5 lg:p-8 xl:p-12 border-t-8 w-full min-h-20">
            <img src="/ries-logo-negativo.png" alt="RIES" className="h-16" />
            <div className="text-right gap-16 grid grid-cols-3 auto-rows-fr font-title text-white text-xl">
                <div className="flex flex-col gap-2">
                    <p className="border-b-2 font-bold">{t("title")}</p>
                    <a
                        href="https://clustersaude.com/"
                        target="_blank"
                        className="hover:text-azul transition-colors duration-300"
                    >
                        Cluster Saúde de Galicia, CSG
                    </a>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="border-b-2 font-bold">Legal</p>
                    <a
                        href="https://forumries.com/blog/politica-privacidad/"
                        target="_blank"
                        className="hover:text-azul transition-colors duration-300"
                    >
                        {t("menu.privacy")}
                    </a>
                    <a
                        href="https://forumries.com/blog/en/legal/"
                        target="_blank"
                        className="hover:text-azul transition-colors duration-300"
                    >
                        {t("menu.legal")}
                    </a>
                    <a
                        href="https://forumries.com/blog/politica-de-cookies/"
                        target="_blank"
                        className="hover:text-azul transition-colors duration-300"
                    >
                        {t("menu.cookies")}
                    </a>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="border-b-2 font-bold">{t("menu.follow")}</p>
                    <RRSS />
                </div>
            </div>
        </div>
    )
}

export default Footer
