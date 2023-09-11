import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import beachFront from './data/Categories.json'; // Import the JSON data

const Surfings = () => {
  const [activeIndexes, setActiveIndexes] = useState(Array(beachFront.beachFront.length).fill(0));
  const beachFrontListings = beachFront.beachFront;

  const handleSelect = (selectedIndex, carouselIndex) => {
    const newIndexes = [...activeIndexes];
    newIndexes[carouselIndex] = selectedIndex;
    setActiveIndexes(newIndexes);
  };

  return (
    <div>
      <Container>
        <Row className="items flex">
          {beachFrontListings.map((listing, index) => (
            <Col className="item" key={index}>
              <Carousel
                activeIndex={activeIndexes[index]}
                onSelect={(selectedIndex) => handleSelect(selectedIndex, index)}
                swipe={true}
                interval={null}
              >
                {listing.images.map((imageUrl, imageIndex) => (
                  <Carousel.Item key={imageIndex} className="imageSlider">
                    <img
                      src={imageUrl}
                      alt={`image${imageIndex + 1}`}
                      className="image-slider-carousel"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

              <div className="details">
                <h4>{listing.title}</h4>
                <p>{listing.location}</p>
                <p>{listing.description}</p>
                <p className="price"> Ghs {listing.price} <span>night</span></p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Surfings;
