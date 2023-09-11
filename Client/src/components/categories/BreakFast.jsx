import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import rooms from "./data/Categories.json"; // Import the JSON data
import Loading from "../Loading";

const Breakfast = () => {
  const [activeIndexes, setActiveIndexes] = useState(
    Array(rooms.rooms.length).fill(0)
  );
  const roomsListings = rooms.rooms;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay and then set loading to false
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleSelect = (selectedIndex, carouselIndex) => {
    const newIndexes = [...activeIndexes];
    newIndexes[carouselIndex] = selectedIndex;
    setActiveIndexes(newIndexes);
  };

  return (
    <div>
      <Container>
        <Row className="items flex">
          {roomsListings.map((listing, index) => (
            <Col className="item" key={index}>
              {loading ? (
                  <Loading/>
              ) : (
                <>
                  <Carousel
                    activeIndex={activeIndexes[index]}
                    onSelect={(selectedIndex) =>
                      handleSelect(selectedIndex, index)
                    }
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
                    <p className="price">
                      Ghs {listing.price} <span>night</span>
                    </p>
                  </div>
                </>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Breakfast;
