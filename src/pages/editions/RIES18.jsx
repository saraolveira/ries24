import { useTranslation } from "react-i18next"
import EditionPage from "../../components/EditionPage"

const RIES18 = () => {
    document.title = "#RIES18"
    const { t, i18n } = useTranslation("common")

    const links = {
        links: [
            {
                href: "https://forumries.com/blog/noticias-forum-ries18/",
                text: "menu.news",
            },
            {
                href: "https://forumries.com/blog/clipping-de-prensa/",
                text: "menu.clipping",
            },
            {
                href: "https://forumries.com/blog/videos/",
                text: "menu.videos",
            },
            {
                href: "https://forumries.com/blog/docs/III-Forum-RIES18-Memoria.pdf",
                text: "menu.report",
            },
            {
                href: "https://forumries.com/blog/docs/RIES2018_programa.pdf",
                text: "menu.program",
            },
            {
                href: "https://forumries.com/blog/ponentes-ries-18/",
                text: "menu.speakers",
            },
            {
                href: "https://forumries.com/blog/pechakutcha-y-workshops/#pechakucha",
                text: "Pechakutcha",
            },
            {
                href: "https://forumries.com/blog/pechakutcha-y-workshops/#workshops",
                text: "Democenter Workshops",
            },
        ],
    }

    const linksMap = links.links

    const links18 = linksMap.map((link, i) => {
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
            title="2018.title"
            logo="/ries18-logo.png"
            image="/ediciones/ries18.jpg"
            links={links18}
            max="md:grid-cols-3"
        />
    )
}

export default RIES18
