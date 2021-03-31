import { NavLink } from 'react-router-dom';
import as from './aside.module.css';

const Aside = () => {
    return (
        <nav className={as.aside__nav}>
            <ul>
                <li><NavLink to="Profile" activeClassName={as.active} className={`${as.aside__link}`}> Profiles</NavLink></li>
                <li><NavLink to="Messages" activeClassName={as.active} className={as.aside__link}>Messages</NavLink></li>
                <li><NavLink to="News" activeClassName={as.active} className={as.aside__link}>News</NavLink></li>
                <li><NavLink to="Music" activeClassName={as.active} className={as.aside__link}>Music</NavLink></li>
                <li><NavLink to="Settings" activeClassName={as.active} className={as.aside__link}>Settings</NavLink></li>
            </ul>
        </nav>
    );

} 
export default Aside;