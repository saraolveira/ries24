import { useTranslation } from "react-i18next"
import EditionPage from "../../components/EditionPage"

const RIES22 = () => {
    document.title = "#RIES22"

    const { t, i18n } = useTranslation("common")

    const links = {
        links: [
            {
                href: "https://forumries.com/blog/introduccion-22/",
                text: "menu.introduction",
            },
            {
                href: "https://forumries.com/blog/programa-22/",
                text: "menu.program",
            },
            {
                href: "https://forumries.com/blog/ponentes-22/",
                text: "menu.speakers",
            },
            {
                href: "https://forumries.com/blog/wp-content/uploads/2022/10/Dossier-RIES22-1.pdf",
                text: "Dossier #RIES22",
            },
            {
                href: "/premios",
                text: "menu.awards",
            },
        ],
    }

    const linksMap = links.links

    const links22 = linksMap.map((link, i) => {
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
            color="from-ries221 to-ries222"
            title="2022.title"
            logo="/ries22-logo.png"
            image="/ediciones/ries22.png"
            links={links22}
            max="md:grid-cols-3"
        />
    )
}

export default RIES22
