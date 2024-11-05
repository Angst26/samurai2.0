import {NavItem} from "../NavItem.tsx";
import links from '../../../constants/links.ts'
import  './mobile-navbar.css'

interface IProps{
    openMenu: string;
}

export const MobileNavbar: React.FC<IProps> = ({openMenu}) => {
    return (
        <nav className={`mobile-menu ${openMenu}`}>
            <ul className='mobile-menu__list'>
                {links.map((link, index) => <NavItem key={index} text={link.text} path={link.path}></NavItem>)
                }
            </ul>
        </nav>

    )
}