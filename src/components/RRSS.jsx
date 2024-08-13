import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLinkedin,
    faInstagram,
    faTwitter,
    faFacebook,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const RRSS = () => {
    return (
        <div className="flex gap-4 text-4xl">
            <a
                href="https://www.linkedin.com/company/cluster-sa%C3%BAde-de-galicia/about/"
                target="_blank"
                className="hover:text-verde transition-colors duration-300"
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href="https://www.instagram.com/clustersaude/"
                target="_blank"
                className="hover:text-verde transition-colors duration-300"
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
                href="https://twitter.com/clustersaude"
                target="_blank"
                className="hover:text-verde transition-colors duration-300"
            >
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
                href="https://www.youtube.com/channel/UCisy5d87j2cHSsqxWfZRF9A"
                target="_blank"
                className="hover:text-verde transition-colors duration-300"
            >
                <FontAwesomeIcon icon={faYoutube} />
            </a>
        </div>
    )
}

export default RRSS
