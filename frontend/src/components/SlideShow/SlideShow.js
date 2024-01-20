import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../Images/slide1.jpg";

const SlideShow = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item style={{ height: "500px" }}>
        <div>
          <img className="d-block w-100 h" src={slide1} alt="First slide"  style={{ height: "500px" }} />
        </div>

        <Carousel.Caption>
          <h5>Medical Scrubs</h5>
          <p>
            Discover lab coats in a completely new way. Beautiful cuts, unique
            colours and practical features to change your look.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          alt="Second slide"
          src='https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10075_410_ALT100/crocs.jpg'
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h5> Medical Shoes</h5>
          <p>
            A well-cut coat is a necessary part of every doctor’s or nurse’s
            wardrobe. Choose the one that will enhance your professional look.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="https://surgicalcaps.com/cdn/shop/products/A0712cG_1024x1024.jpg?v=1496573542"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Medical caps</h5>
          <p>
          Many colors and patterns. You can easily find something for you!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
     
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6097995/pexels-photo-6097995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{ height: "500px" }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Medical Shoes</h5>
          <p>
            Choose among many models and styles of professional footwear that
            will keep discomfort at bay for many hours.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;
