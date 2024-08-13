import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const Edicion = ({ edition, title, year, location, path, color, delay }) => {
    const { t, i18n } = useTranslation("editions")

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const delay1 = delay + 0.1
    const delay2 = delay + 0.2
    const delay3 = delay2 + 0.2

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: delay }}
            className="relative grid grid-cols-1 auto-rows-fr bg-blanco24 p-2 rounded-3xl font-body text-center cursor-pointer group"
        >
            <Link to={path} className="grid grid-cols-1 auto-rows-fr">
                <div
                    className={`flex flex-col justify-between gap-6 group-hover:bg-gradient-to-r ${color}  p-6 rounded-3xl transition-all duration-300`}
                >
                    <div>
                        <motion.p
                            ref={ref}
                            variants={{
                                hidden: { opacity: 0, x: 175 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: delay1 }}
                            className="group-hover:text-blanco24 font-bold font-title text-2xl text-verde md:text-3xl transition-all duration-300"
                        >
                            {t(edition)}
                        </motion.p>
                        <motion.p
                            ref={ref}
                            variants={{
                                hidden: { opacity: 0.2, filter: "blur(3px)" },
                                visible: { opacity: 1, filter: "blur(0)" },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.5, delay: delay3 }}
                            className="group-hover:text-blanco24 mt-2 font-bold text-lg transition-all duration-300"
                        >
                            {t(title)}
                        </motion.p>
                    </div>
                    <motion.div
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0.2, filter: "blur(3px)" },
                            visible: { opacity: 1, filter: "blur(0)" },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: delay3 }}
                        className="group-hover:text-blanco24 text-right text-base italic transition-all duration-300"
                    >
                        <p>{year}</p>
                        <p>{location}</p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        className={`left-0 right-0 top-0 bottom-0 m-auto absolute bg-gradient-to-r ${color} p-2 rounded-3xl w-5/6 h-5/6 origin-left`}
                        variants={{
                            hidden: { transform: "scaleX(1)" },
                            visible: { transform: "scaleX(0)" },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: delay2 }}
                    ></motion.div>
                </div>
            </Link>
        </motion.div>
    )
}

const Ediciones = () => {
    return (
        <div className="gap-4 xl:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr xl:px-10 xl:py-32 p-3.5 lg:p-8 w-full">
            <Edicion
                delay={0.25}
                edition="2023.edition"
                title="2023.title"
                year={2023}
                location="Vigo"
                path="ries23"
                color="from-ries231 to-ries232"
            />
            <Edicion
                delay={0.35}
                edition="2022.edition"
                title="2022.title"
                year={2022}
                location="Santiago de Compostela"
                path="ries22"
                color="from-ries221 to-ries222"
            />
            <Edicion
                delay={0.45}
                edition="2021.edition"
                title="2021.title"
                year={2021}
                location="Mondariz, Pontevedra"
                path="ries21"
                color="from-ries211 to-ries212"
            />
            <Edicion
                delay={0.55}
                edition="2020.edition"
                title="2020.title"
                year={2020}
                location="Palas de Rei, Lugo"
                path="ries20"
                color="from-ries201 to-ries202"
            />
            <Edicion
                delay={0.25}
                edition="2019.edition"
                title="2019.title"
                year={2019}
                location="A Coruña"
                path="ries19"
                color="from-ries191 to-ries192"
            />
            <Edicion
                delay={0.35}
                edition="2018.edition"
                title="2018.title"
                year={2018}
                location="Pontevedra"
                path="ries18"
                color="from-azul to-verde"
            />
            <Edicion
                delay={0.45}
                edition="2017.edition"
                title="2017.title"
                year={2017}
                location="Ourense"
                path="ries17"
                color="from-azul to-verde"
            />
            <Edicion
                delay={0.55}
                edition="2016.edition"
                title="2016.title"
                year={2016}
                location="Santiago de Compostela"
                path="ries16"
                color="from-azul to-verde"
            />
        </div>
    )
}

export default Ediciones
