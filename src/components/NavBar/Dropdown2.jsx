import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AdmonItems } from './AdmonItems';
import { UserItems } from './UserItems';
import useUser from '../../hooks/UseUser';
import './Dropdown.css';

export function AdmonDrop2(mobile) {
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
            {mobile && <>
                {navOptions.map((item) => (
                    <li key={item.id} className="a w-100 d-block" onClick={() => setDropdown(false)}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </>}
            
        </>
    )
}