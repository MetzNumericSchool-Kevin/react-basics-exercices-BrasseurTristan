import { BoutonAppelArchibald } from "./BoutonAppelArchibald";


export const AppelArchibald = () => {
    return (
        <section id="exercice2">
            <h2>Si je ne suis pas là, faites sonner la cloche !</h2>
            <BoutonAppelArchibald quandSorcierRepond={() => { alert("🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !") }} />
        </section>
    );
}