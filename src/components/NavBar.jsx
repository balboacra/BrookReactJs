import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-white shadow-sm">
            <div className="container-fluid">
                <h2>FlyCast</h2>
                <select className="form-select w-25 position-absolute top-50 start-50 translate-middle">
                    <option selected>Qué estás buscando?</option>
                    <option value="1">Cañas</option>
                    <option value="2">Combos</option>
                    <option value="3">Reels</option>
                    <option value="3">Materiales de atado</option>
                    <option value="3">Líneas</option>
                    <option value="3">Indumentaria</option>
                    <option value="3">Leaders, Tippets</option>
                    <option value="3">Otros</option>
                </select>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link text-dark" href="#">Productos</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#">Contacto</a></li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}
export default NavBar