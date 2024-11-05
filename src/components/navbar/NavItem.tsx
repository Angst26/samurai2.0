import styles from "./nav-item.module.css";
import {NavLink} from "react-router-dom";

interface IProps {
    path: string;
    text: string;
    imgSrc?: string;
}

export const NavItem: React.FC<IProps> = ({path, text}) => {


    return (
        <li><NavLink

            to={path}
            className={styles.item}>

            <p>{text}</p>
        </NavLink></li>

    )
}