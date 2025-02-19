import { useState } from "react";
import { Boite } from "./Boite";
import { Bouton } from "./Bouton";


export const BoitesPolycouleurs = () => {

    const [color, setColor] = useState(['', '', '']);

    function red() {
        setColor(['red', '', '']);
    }

    function changeColor(value) {
        switch (value) {
            case 'red':
                setColor(['red', '', '']);
                break;
            case 'blue':
                setColor(['blue', 'blue', '']);
                break;
            case 'green':
                setColor(['green', 'green', 'green']);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div className="row">
                <Bouton cssStyle="btn-danger" text='Change la première boîte en rouge' cgColor={() => { changeColor('red') }} />
                <Bouton cssStyle="btn-primary" text='Change les 2 premières boîtes en bleu' cgColor={() => { changeColor('blue') }} />
                <Bouton cssStyle="btn-success" text='Change toutes les boîtes en vert' cgColor={() => { changeColor('green') }} />
            </div>
            <div className="row mt-5 gap-5">
                <Boite bgColor={color[0]} />
                <Boite bgColor={color[1]} />
                <Boite bgColor={color[2]} />
            </div>
        </>

    );
}