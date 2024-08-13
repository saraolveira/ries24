import { useState } from "react"
import { motion, useCycle } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { MenuToggle } from "./MenuToggle.jsx"
import MenuItem from "./MenuItem.jsx"
import RRSS from "./RRSS.jsx"

const lngs = {
    en: { nativeName: "EN" },
    es: { nativeName: "ES" },
    gl: { nativeName: "GL" },
}

const Navbar = () => {
    const [desplegar, setDesplegar] = useState(false)
    const [arrow, setArrow] = useState(faCaretDown)
    const [isOpen, toggleOpen] = useCycle(false, true)

    const handleDesplegar = () => {
        setDesplegar(!desplegar)

        if (!desplegar) {
            setArrow(faCaretUp)
        } else {
            setArrow(faCaretDown)
        }
    }

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at calc(100% - 4em) 45px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: "circle(25px at calc(100% - 4em) 45px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    }

    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    }

    const items = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    }

    const { t, i18n } = useTranslation("common")

    return (
        <header>
            <nav className="top-0 z-50 fixed flex justify-between items-center bg-gradient-to-r from-azul to-verde p-3.5 lg:p-8 xl:p-12 w-full h-20 font-bold font-title">
                <div className="flex justify-between items-center w-[94%]">
                    <Link to="/">
                        <img
                            src="/ries-logo-negativo.png"
                            className="relative z-40 h-16"
                        />
                    </Link>
                    <div
                        className={`gap-8 text-2xl text-blanco24 ${
                            isOpen ? "hidden" : "hidden lg:flex items-center"
                        }`}
                    >
                        <Link
                            to="/premios"
                            className="hover:text-azul transition-colors duration-300"
                        >
                            {t("menu.awards")}
                        </Link>
                        <div className="flex gap-2 bg-azul px-4 py-1 rounded-full">
                            {Object.keys(lngs).map((lng) => (
                                <button
                                    key={lng}
                                    style={{
                                        fontWeight:
                                            i18n.resolvedLanguage === lng
                                                ? "bold"
                                                : "normal",
                                    }}
                                    type="submit"
                                    className="hover:text-verde transition-colors duration-300"
                                    onClick={() => i18n.changeLanguage(lng)}
                                >
                                    {lngs[lng].nativeName}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <motion.div
                        className={`top-0 right-0 w-full h-svh bg-gradient-to-r from-verde to-azul ${
                            isOpen ? "fixed" : "absolute"
                        }`}
                        variants={sidebar}
                    />
                    <motion.div
                        variants={variants}
                        className={`fixed top-0 right-0 w-full h-screen pt-24 pr-12 flex flex-col items-end gap-4 text-blanco24 text-3xl ${
                            isOpen
                                ? "pointer-events-auto"
                                : "pointer-events-none"
                        }`}
                    >
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/"
                            text="Home"
                        />
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/premios"
                            text={t("menu.awards")}
                        />
                        <motion.div
                            variants={items}
                            className="hover:text-verde transition-colors duration-300 cursor-pointer"
                            onClick={handleDesplegar}
                        >
                            {t("menu.editions")}{" "}
                            <FontAwesomeIcon icon={arrow} />
                        </motion.div>
                        <motion.div
                            variants={items}
                            className={desplegar ? "block" : "hidden"}
                        >
                            <MenuItem
                                toggle={() => toggleOpen()}
                                path="/ries23"
                                text="#RIES23"
                            />
                            <MenuItem
                                toggle={() => toggleOpen()}
                                path="/ries22"
                                text="#RIES22"
                            />
                            <MenuItem
                                toggle={() => toggleOpen()}
                                path="/ries21"
                                text="#RIES21"
                            />
                            <MenuItem
                                toggle={() => toggleOpen()}
                                path="/ries20"
                                text="#RIES20"
                            />
                            <MenuItem
                                toggle={() => toggleOpen()}
                                path="/ries19"
                                text="#RIES19"
                            />
                            <MenuItem
                                toggle={() => toggleOpen()}
                                path="/ries18"
                                text="#RIES18"
                            />
                            <MenuItem
                                toggle={() => toggleOpen()}
                                path="/ries17"
                                text="#RIES17"
                            />
                            <MenuItem
                                toggle={() => toggleOpen()}
                                path="/ries16"
                                text="#RIES16"
                            />
                        </motion.div>
                        <motion.div
                            variants={items}
                            className="flex gap-2 bg-verde px-4 py-1 rounded-full"
                        >
                            {Object.keys(lngs).map((lng) => (
                                <button
                                    key={lng}
                                    style={{
                                        fontWeight:
                                            i18n.resolvedLanguage === lng
                                                ? "bold"
                                                : "normal",
                                    }}
                                    type="submit"
                                    className="hover:text-azul transition-colors duration-300"
                                    onClick={() => {
                                        i18n.changeLanguage(lng)
                                        // toggleOpen()
                                    }}
                                >
                                    {lngs[lng].nativeName}
                                </button>
                            ))}
                        </motion.div>
                        <motion.div variants={items}>
                            <RRSS />
                        </motion.div>
                    </motion.div>
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.div>
            </nav>
        </header>
    )
}

export default Navbar
