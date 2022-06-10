import React, { useState, useEffect } from "react";
import Axios from "axios";

// import { random, commerce } from "faker";
import * as faker from 'faker';

import { Container, Col, Row } from "reactstrap";
import CardItem from "./CardItem";



const apiKeyPexel = process.env.REACT_APP_API_KEY_pexels;
const apiKey = apiKeyPexel;

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
// const localurl = "https://api.myjson.com/bins/qp9uo";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

    const fetchPhotos = async () => {
      const {data} = await Axios.get(url, {
        headers: {
          Authorization: apiKey
        }});

        const { photos } = data;

    const allProduct = photos.map(photo => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.random.word(),
      productPrice: faker.commerce.price(),
      id: faker.random.uuid()
    }));

    setProduct(allProduct);  
  };

  // const fetchPhotos = async () => {
  //   const { data } = await Axios.get(localurl, {});

  //   const { photos } = data;

  //   const allProduct = photos.map(photo => ({
  //     smallImage: photo.src.medium,
  //     tinyImage: photo.src.tiny,
  //     productName: faker.random.word(),
  //     productPrice: faker.commerce.price(),
  //     id: faker.random.uuid()
  //   }));

  //   setProduct(allProduct);
  // };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map(product => (
          <Col md={4} key={product.id}>
              <CardItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
