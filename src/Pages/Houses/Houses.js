import Header from "../../components/Header/Header.js";
import "./Houses.css";
import Footer from "../../components/Footer/Footer.js";
import Ratings from "../../components/Rate/Ratings";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse.js";
import Gallery from "../../components/Gallery/Gallery";
import Error from "../Error/Error";
var Logements = require("../../Data/datas.json");

function Houses() {
  const params = useParams();
  const logementId = params.id;
  const logement = Logements.find((l) => l.id === logementId);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="page-houses">
      <Header />

      <div className="container">
        <div key={logement.id} className="main-houses">
          <div className="house-carrousel">
            <Gallery pictures={logement.pictures} />
          </div>

          <div className="infos">
            <div className="left">
              <div className="title">{logement.title}</div>
              <div className="location">{logement.location}</div>
              <ul className="tags">
                {logement.tags.map((word, index) => (
                  <li key={index} className="tag">
                    {word}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rigth">
              <div className="host">
                <div className="host-name">{logement.host.name}</div>
                <div className="host-picture">
                  <img src={logement.host.picture} alt="hostPhoto"></img>
                </div>
              </div>
              <div className="rating">
                <Ratings note={logement.rating} />
              </div>
            </div>
          </div>
          <div className="house-buttons">
            <div className="house-details">
              <Collapse title="Description" text={logement.description} />
              <Collapse
                title="Equipement"
                text={logement.equipments}
                isArray={true}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Houses;
