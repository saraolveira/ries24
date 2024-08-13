import { useTranslation } from "react-i18next"
import EditionPage from "../../components/EditionPage"

const RIES20 = () => {
    document.title = "#RIES20"
    const { t, i18n } = useTranslation("common")

    const links = {
        links: [
            {
                href: "https://forumries.com/blog/introduccion-2/",
                text: "menu.introduction",
            },
            {
                href: "https://forumries.com/blog/programa-2/",
                text: "menu.program",
            },
            {
                href: "https://forumries.com/blog/ponentes-2/",
                text: "menu.speakers",
            },
            {
                href: "https://forumries.com/blog/wp-content/uploads/2020/11/Dossier-RIES20-Castellano-Imprimir_compressed.pdf",
                text: "Dossier #RIES20",
            },
            {
                href: "https://forumries.com/blog/proyecto-ahfes/",
                text: "AHFES",
            },
        ],
    }

    const linksMap = links.links

    const links20 = linksMap.map((link, i) => {
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
            color="from-ries201 to-ries202"
            title="2020.title"
            logo="/ries20-logo.png"
            image="/ediciones/ries20.jpg"
            links={links20}
            max="md:grid-cols-3"
        />
    )
}

export default RIES20
