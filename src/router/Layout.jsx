import {Outlet, Link} from 'react-router-dom';

const Layout = () => {
    return (
        <div>
        <nav className="navbar">
            <ul>
            <li>
                <Link to="/" className="nav-link">
                Home
                </Link>
            </li>
            <li>
                <Link to="/map" className="nav-link">
                Map
                </Link>
            </li>
            </ul>
        </nav>
        <Outlet />
        </div>
    );
    }

export default Layout;