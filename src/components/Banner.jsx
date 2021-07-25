import React from "react";
import { Card, CardImg } from "reactstrap";
import CardProduct from "./CardProduct";
import NadandoCom from "../images/cbjr.jpg";
import RushOfBlood from "../images/cp.jpg";
import Charles from "../images/jbj-1.jpg";
import SambaEsquema from "../images/jbj-2.jpg";
import LifeOf from "../images/kn.jpeg";
import InRainbows from "../images/rh.jpg";
import DiscoClub from "../images/tm-1.jpg";
import Racional from "../images/tm-2.jpeg";

const Banner = () => {
  const albuns = [
    {
      cover: SambaEsquema,
      title: "Samba Esquema Novo",
      price: "350.59",
      description: "Álbum histórico de Jorge Ben Jor",
    },
    {
      cover: NadandoCom,
      title: "Nadando Com Tubarões",
      price: "70.59",
      description: "Álbum de Charlie Brown Jr.",
    },
    {
      cover: RushOfBlood,
      title: "A Rush Of Blood",
      price: "50.99",
      description: "Álbum de Cold Play",
    },
    {
      cover: Charles,
      title: "Charles Anjo 45",
      price: "370.99",
      description: "Álbum de Jorge Ben Jor",
    },
    {
      cover: LifeOf,
      title: "Life Of Pablo",
      price: "69.89",
      description: "Álbum de Kanye West",
    },
    {
      cover: InRainbows,
      title: "In Rainbows",
      price: "65.49",
      description: "Álbum de Radiohead.",
    },
    {
      cover: DiscoClub,
      title: "Disco Club",
      price: "270.89",
      description: "Álbum de Tim Maia",
    },
    {
      cover: Racional,
      title: "Racional - Vol. I",
      price: "399.99",
      description: "Álbum de Tim Maia",
    },
  ];

  return (
    <>
      <div className="d-flex flex-wrap justify-content-evenly">
        {albuns.map((album) => (
          <Card className="w-25 p-1 m-2">
            <CardImg top src={album.cover} alt="Samba Esquema Novo Jorge Ven" />
            <CardProduct
              title={album.title}
              price={album.price}
              description={album.description}
            />
          </Card>
        ))}
      </div>

      {/* <Card className="w-25 p-1 m-2">
        <CardImg top src={albuns.cover} alt="Samba Esquema Novo Jorge Ven" />
        <CardProduct
          title={albuns.title}
          price={albuns.price}
          description={albuns.description}
        />
      </Card> */}
    </>
  );
};

export default Banner;
