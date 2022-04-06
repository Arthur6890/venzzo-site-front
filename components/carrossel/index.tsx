import React from "react";
import { Carousel } from "react-bootstrap";

export function CarouselGlasses() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Group 1.png"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Group 1.png"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Group 1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
