import "./App.css";
import { Title } from "./exercices/exercice1/BienvenueAventurier";
import { AppelArchibald } from "./exercices/exercice2/AppelArchibald";
import { Miroir } from "./exercices/exercice3/Miroir";
import { BoitesPolycouleurs } from "./exercices/exercice4/BoitesPolycouleurs";

function App() {
  return (
    <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
      <Title title="Boutique d'Archibald le Sorcier 🧙‍♂️" text="Bienvenue Aventurier, ici vous pouvez acheter diverses potions pour vos aventures !" />
      <AppelArchibald />

      <h1 className="my-5">Voici quelques objets de ma boutique :</h1>

      <section id="exercice3" className="my-5 flex self-center">
        <h2>Le miroir de beauté</h2>
        <Miroir />
        <p>Vous avez l'air d'être un aventurier plein de charme dites-moi.</p>
      </section>

      <section id="exercice4" className="my-5">
        <h2>Les boîtes polycouleurs</h2>

        <BoitesPolycouleurs />
      </section>
    </div>
  );
}

export default App;
