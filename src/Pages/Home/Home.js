import Banner from "../../components/Banner/Banner";
import banner from "../../assets/img-home.png";
import Card from "../../components/Card/Card";
import "./Home.css";
var Logements = require("../../Data/datas.json");

function Home() {
  return (
    <div className="container">
      <Banner img={banner} text="Chez vous, partout et ailleurs" />

      <div className="App-main-diaporama">
        <div className="App-main-diaporama-photos">
          {Logements.map((logement) => (
            <Card key={logement.id} logement={logement} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
