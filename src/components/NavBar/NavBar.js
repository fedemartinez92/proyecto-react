import { CartWidget } from "./CartWidget/CartWidget";
import { MenuNavbar } from "./MenuNavBar/MenuNavBar";

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <MenuNavbar />
                <CartWidget />
            </nav>
        </div>
    );
}