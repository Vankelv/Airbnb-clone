import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import { Carousel } from "react-bootstrap";
import rooms from "./categories/data/Categories.json";
import { Container, Row, Col } from "react-bootstrap";
const Loading = () => {
  const [activeIndexes, setActiveIndexes] = useState(
    Array(rooms.rooms.length).fill(0)
  );
  const roomsListings = rooms.rooms;
  const handleSelect = (selectedIndex, carouselIndex) => {
    const newIndexes = [...activeIndexes];
    newIndexes[carouselIndex] = selectedIndex;
    setActiveIndexes(newIndexes);
  };
  return (
    <>
  {roomsListings.map((listing, index) => (
    <Col className="item" key={index}>
    <Skeleton variant="rectangular" animation="wave" width={270} height={250} style={{borderRadius:"10px"}}>
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
    </Skeleton>
  
      <div className="details">
        <Skeleton variant="text" animation="wave" height={40} width={200}><h4></h4></Skeleton>
        <Skeleton variant="text" animation="wave" height={40} width={170}><p></p></Skeleton>
        <Skeleton variant="text" animation="wave" height={40} width={150}><p></p></Skeleton>
        <Skeleton variant="text" animation="wave" height={40} width={100}><p><span style={{marginLeft:"10px"}}><Skeleton variant="text"></Skeleton></span></p></Skeleton>
      </div>
      </Col>
        ))}
    </>
  );
};

export default Loading;
