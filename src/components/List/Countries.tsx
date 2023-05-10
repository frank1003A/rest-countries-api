import React from 'react'
import styles from "@/app/page.module.css"

interface CountriesProps extends React.ComponentPropsWithoutRef<'div'>{}

const Countries = ({ children, ...rest }: CountriesProps) => {
  return (
    <div className={styles.list} {...rest}>
        {children}
    </div>
  )
}

export default Countries