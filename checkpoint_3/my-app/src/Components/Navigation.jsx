import { useState } from "react"
import { Login } from "./Login"

export function Navigation() {

    const [navigation, setNavigation] = useState("Inicio")

    return(
        <div>
            <nav>
                <button onClick={() => setNavigation("Inicio")}>Inicio</button>
                <button onClick={() => setNavigation("Acerca de")}>Acerca de</button>
                <button onClick={() => setNavigation("Contact")}>Contact</button>
                <button onClick={() => setNavigation("Login")}>Login</button>
            </nav>
            <hr></hr>
            <div>
                {navigation === "Inicio" && <h4>Bienvenido al Inicio</h4>}
                {navigation === "Acerca de" && <h4>Mas informacion</h4>}
                {navigation === "Contact" && <h4>Contactanos</h4>}
                {navigation === "Login" && <Login />}
            </div>
        </div>
    )
}