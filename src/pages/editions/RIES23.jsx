import { useTranslation } from "react-i18next"
import EditionPage from "../../components/EditionPage"

const RIES23 = () => {
    document.title = "#RIES23"

    const { t, i18n } = useTranslation("common")

    const links = {
        links: [
            {
                href: "https://forumries.com/RIES23_Program.pdf",
                text: "menu.program",
            },

            {
                href: "https://forumries.com/RIES23Dossier.pdf",
                text: "Dossier #RIES23",
            },
            {
                href: "/premios",
                text: "menu.awards",
            },
        ],
    }

    const linksMap = links.links

    const links23 = linksMap.map((link, i) => {
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
            color="from-ries231 to-ries232"
            title="2023.title"
            logo="/ries23-logo.png"
            image="/ediciones/ries23.png"
            links={links23}
            max="md:grid-cols-3"
        />
    )
}

export default RIES23
