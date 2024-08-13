import { useTranslation } from "react-i18next"
const Description = () => {
    const { t, i18n } = useTranslation("common")

    return (
        <div className="md:items-center gap-10 grid grid-cols-1 md:grid-cols-2 xl:px-10 py-10 xl:py-32 p-3.5 lg:p-8 xl:pb-10">
            <p className="font-body text-center text-white md:text-xl md:text-justify">
                {t("description")}
            </p>
            <p className="font-body font-bold text-center text-white text-xl md:text-2xl">
                {t("soon")}
            </p>
        </div>
    )
}

export default Description
