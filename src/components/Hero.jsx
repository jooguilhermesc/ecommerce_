import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import NadandoCom from "../images/cbjr.jpg";
import Charles from "../images/jbj-1.jpg";
import DiscoClub from "../images/tm-1.jpg";

const items = [
  {
    src: NadandoCom,
    altText: "Álbum Nadando Com Os Tubarões",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: Charles,
    altText: "Álbum Charles Anjo 45",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: DiscoClub,
    altText: "Álbum Disco Club",
    caption: "",
    header: "",
    key: "3",
  },
];

const Hero = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h2>Produtos em destaque</h2>
        <div className="d-flex justify-content-evenly align-items-center">
          <h3>Confira nossas ofertas!</h3>

          <div className="w-25 mb-3">
            <UncontrolledCarousel items={items} controls={false} />
          </div>
          <h3>Aproveite nossos descontos</h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
