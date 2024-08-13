import { useTranslation } from "react-i18next"
import EditionPage from "../../components/EditionPage"

const RIES21 = () => {
    document.title = "#RIES21"
    const { t, i18n } = useTranslation("common")

    const links = {
        links: [
            {
                href: "https://forumries.com/blog/introduccion-3/",
                text: "menu.introduction",
            },
            {
                href: "https://forumries.com/blog/wp-content/uploads/2021/12/Programa_RIES21_final-1_compressed.pdf",
                text: "menu.program",
            },
            {
                href: "https://forumries.com/blog/comite-ries21/",
                text: "menu.committee",
            },
            {
                href: "https://forumries.com/blog/ponentes-3/",
                text: "menu.speakers",
            },
            {
                href: "https://forumries.com/blog/wp-content/uploads/2021/12/DOSSIER-29-11-OK_compressed-3.pdf",
                text: "Dossier #RIES21",
            },
            {
                href: "/premios",
                text: "menu.awards",
            },
        ],
    }

    const linksMap = links.links

    const links21 = linksMap.map((link, i) => {
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
            color="from-ries211 to-ries212"
            title="2021.title"
            logo="/ries21-logo.png"
            image="/ediciones/ries21.png"
            links={links21}
            max="md:grid-cols-3"
        />
    )
}

export default RIES21
