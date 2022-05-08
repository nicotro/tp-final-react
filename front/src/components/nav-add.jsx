import { Link } from 'react-router-dom';
import { FavCount } from './fav-count';

export function NavAdd(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/form">Create Add</Link>
                </li>
            </ul>
            <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link" to="/favorites"><FavCount count={props.total} /></Link>
                </li>
            </ul>
        </nav>
    );
}
