import { useTranslation } from "react-i18next"
import EditionPage from "../../components/EditionPage"

const RIES17 = () => {
    document.title = "#RIES17"
    const { t, i18n } = useTranslation("common")

    const links = {
        links: [
            {
                href: "https://forumries.com/blog/docs/RIES2017_memoria.pdf",
                text: "menu.report",
            },
            {
                href: "https://forumries.com/blog/galeria-ediciones-anteriores/",
                text: "menu.gallery",
            },
        ],
    }

    const linksMap = links.links

    const links17 = linksMap.map((link, i) => {
        return (
            <a
                href={link.href}
                target="_blank"
                key={i}
                className="border-4 bg-blanco24 hover:bg-transparent px-10 py-1 border-blanco24 rounded-full font-bold font-title text-center text-verde lg:text-2xl hover:text-blanco24 uppercase transition-colors duration-300"
            >
                {t(link.text)}
            </a>
        )
    })

    return (
        <EditionPage
            color="from-azul to-verde"
            title="2017.title"
            logo="/ries-logo.png"
            links={links17}
            max="md:grid-cols-2"
        />
    )
}

export default RIES17
