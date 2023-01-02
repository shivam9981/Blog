import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className={styles.nav_container}>
            <Link href='/' className={styles.nav_link}><p className={styles.logo}>Blogers</p></Link>
            <ul className={styles.ul_container}>
                <Link href='/' className={styles.nav_link}><li >Home </li></Link>
                <Link href='/Component/About' className = {styles.nav_link}><li >About </li></Link>
                <Link href='/Component/Blog' className={styles.nav_link}><li >Blog</li></Link>
                <Link href='/Component/Contect' className={styles.nav_link}><li>Contect</li></Link>
            </ul>

            {/* <h1 className={styles.crossbar}>X</h1> */}
        </div>
    )
}

export default Navbar