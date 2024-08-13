import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

const Countdown = () => {
    const { t, i18n } = useTranslation("common")

    const COUNTDOWN_TARGET = new Date("2024-11-13T19:00:00")
    const getTimeLeft = () => {
        const totalTimeLeft = COUNTDOWN_TARGET - new Date()
        const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60)
        const seconds = Math.floor((totalTimeLeft / 1000) % 60)
        return { days, hours, minutes, seconds }
    }
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    const contador = Object.entries(timeLeft)
    const dias = contador[0][1]
    const horas = contador[1][1]
    const minutos = contador[2][1]
    const segundos = contador[3][1]

    return (
        <div className="right-4 lg:right-8 xl:right-10 bottom-4 md:bottom-10 absolute gap-2 md:gap-1 border-2 border-verde grid grid-cols-2 md:grid-cols-4 auto-rows-fr bg-blanco24 p-2 rounded-full w-6/12 lg:w-2/4 xl:w-1/4 font-bold font-title text-center text-verde text-xs lg:text-xl">
            <div className="">
                <p>{dias}</p>
                <p> {t("dates.days")}</p>
            </div>
            <div className="">
                <p>{horas}</p>
                <p> {t("dates.hours")}</p>
            </div>
            <div className="">
                <p>{minutos}</p>
                <p> {t("dates.minutes")}</p>
            </div>
            <div>
                <p>{segundos}</p>
                <p> {t("dates.seconds")}</p>
            </div>
        </div>
    )
}

export default Countdown
