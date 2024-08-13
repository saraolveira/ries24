import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const MenuItem = ({ path, text, toggle }) => {
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

    return (
        <motion.div variants={items}>
            <Link
                onClick={toggle}
                className="hover:text-verde transition-colors duration-300"
                to={path}
            >
                {text}
            </Link>
        </motion.div>
    )
}

export default MenuItem
