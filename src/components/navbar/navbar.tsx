import links from '../../constants/links.ts'
import styles from './sidebar.module.css'
import {NavItem} from "./NavItem.tsx";

export const Navbar = () => {
    return (
        <nav className={styles['navbar-menu']}>
            <ul className={styles['navbar-menu__list']}>
                {links.map((link, index) => <NavItem key={index} text={link.text} path={link.path}></NavItem>)
                }
            </ul>
        </nav>

    )
}