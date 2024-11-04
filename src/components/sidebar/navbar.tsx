import {NavLink} from "react-router-dom";
import styles from './sidebar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink
                to='/profile'
                className={styles.item}
            >
                <p>Профиль</p>
            </NavLink>
            <NavLink
                to='/dialogs'
                className={styles.item}>
                <p>Сообщения</p>
            </NavLink>
            <NavLink
                to='/users'
                className={styles.item}>
                <p>Пользователи</p>
            </NavLink>
            <NavLink
                to='#'
                className={styles.item}>
                <p>Выход</p>
            </NavLink>
        </nav>

    )
}