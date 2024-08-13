import { useTranslation } from "react-i18next"
import EditionPage from "../../components/EditionPage"

const RIES19 = () => {
    document.title = "#RIES19"
    const { t, i18n } = useTranslation("common")

    const links = {
        links: [
            {
                href: "https://forumries.com/blog/introduccion/",
                text: "menu.introduction",
            },
            {
                href: "https://forumries.com/blog/presentacion/",
                text: "menu.presentation",
            },
            {
                href: "https://forumries.com/blog/galeria-de-fotos/",
                text: "menu.gallery",
            },
            {
                href: "https://forumries.com/blog/noticias-forum-ries19/",
                text: "menu.news",
            },
            {
                href: "https://forumries.com/blog/programa/",
                text: "menu.program",
            },
            {
                href: "https://forumries.com/blog/ponentes/",
                text: "menu.speakers",
            },
            {
                href: "https://forumries.com/blog/docs/IV-FORUM-RIES19-dossier-ESP.pdf",
                text: "Dossier #RIES19",
            },
            {
                href: "https://forumries.com/blog/presentaciones/",
                text: "menu.presentations",
            },
            {
                href: "https://clustersaude.com/proyectos/neuroatlantic/",
                text: "NeuroAtlantic",
            },
        ],
    }

    const linksMap = links.links

    const links19 = linksMap.map((link, i) => {
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
            color="from-ries191 to-ries192"
            title="2019.title"
            logo="/ries19-logo.png"
            image="/ediciones/ries19.jpg"
            links={links19}
            max="md:grid-cols-3"
        />
    )
}

export default RIES19
