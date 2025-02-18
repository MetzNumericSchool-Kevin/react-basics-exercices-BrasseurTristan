import { useState } from "react";

export const Miroir = () => {

    const [hoverMouse, setHoverMouse] = useState(false);

    const styleMiroir = hoverMouse ? { opacity: 1 } : { opacity: 0 };

    return (

        <div className="card bg-dark border border-warning-subtle miroir">
            <img src="aventurier.jpg" className="card-img-top img-fluid" style={styleMiroir} onMouseEnter={() => { setHoverMouse(true) }} onMouseLeave={() => { setHoverMouse(false) }} />
            <div className="card-body">
                <h5 className="card-title">Miroir mon beau miroir</h5>
                <p className="card-text">Quel est mon reflet ?</p>
            </div>
        </div>
    );
}