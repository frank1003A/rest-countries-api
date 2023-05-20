import styles from "@/app/page.module.css"
import { motion, MotionProps } from 'framer-motion'

interface CountriesProps extends MotionProps{}

const Countries = ({ children, ...rest }: CountriesProps) => {
  return (
    <motion.div  className={styles.list} {...rest}>
        {children}
    </motion.div>
  )
}

export default Countries