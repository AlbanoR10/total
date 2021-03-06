import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AdmonItems } from './AdmonItems';
import { UserItems } from './UserItems';
import useUser from '../../hooks/UseUser';
import './Dropdown.css';

export function AdmonDrop(mobile) {
    var [navOptions, setNavOptions] = useState(UserItems);
    const [dropdown, setDropdown] = useState(false);
    const { isLogged } = useUser();

    useEffect(() => {
        var username = window.sessionStorage.getItem('username');
        if (username === "admin") {
            setNavOptions(AdmonItems);
        } else {
            setNavOptions(UserItems);
        }

    }, [isLogged])

    return (
        <>
            {<ul className={dropdown ? "Admon-submenu clicked" : "Admon-submenu"} onClick={() => setDropdown(!dropdown)}>
                {navOptions.map((item) => (
                    <li key={item.id} className={item.dName} onClick={() => setDropdown(false)}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>}
            {/* {mobile && <>
                {navOptions.map((item) => (
                    <li key={item.id} className={item.dName} onClick={() => setDropdown(false)}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </>} */}
            
        </>
    )
}
