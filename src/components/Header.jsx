import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to='/' className="header__text"><h1 >Список задач</h1></Link>
            <Link to="/about" className="info"><p>Информация</p></Link>
        </header>
    );
}

export default Header;