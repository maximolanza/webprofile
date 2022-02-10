import { useState } from "react";
import Hamburuger from "./Hamburuger";

const NavBar = () => {
    const [hamburguer, setHamburuger] = useState(false);
    const [overlayIsOpen, setOverlayIsOpen] = useState(false);

    const onSetOverlay = (isOpen) => {
        setOverlayIsOpen(isOpen);
        setHamburuger(isOpen)
        document.body.style.overflow = isOpen ? 'hidden' : 'visible';

    }
    const closeOverlay = () => {
        onSetOverlay(!overlayIsOpen)
        setHamburuger(!hamburguer)
    }
    return (
        <div className="navbar" id="home">

            <Hamburuger hamburguer={hamburguer} setHamburuger={onSetOverlay} />

            <div className="navbar" id="menu">
                <a href="#home">Home</a>
                <a href="#experience">Experiencie</a>
                <a href="#aboutme">About me</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
            </div>

            <div className={overlayIsOpen ? "overlay" + " " + 'open' : "overlay"} >
                <a href="#home" onClick={() => closeOverlay()}>Home</a>
                <a href="#experience" onClick={() => closeOverlay()}>Experiencie</a>
                <a href="#aboutme" onClick={() => closeOverlay()}>About me</a>
                <a href="#skills" onClick={() => closeOverlay()}>Skills</a>
                <a href="#projects" onClick={() => closeOverlay()}>Projects</a>
            </div>

        </div>
    );
}

export default NavBar;