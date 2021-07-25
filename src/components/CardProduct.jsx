import React from "react";
import {
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const CardProduct = (props) => {
  return (
    <>
      <CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          R${props.price}
        </CardSubtitle>
        <CardText>{props.description}</CardText>
        <Button color="primary">Adicionar ao Carrinho</Button>
      </CardBody>
    </>
  );
};

export default CardProduct;
