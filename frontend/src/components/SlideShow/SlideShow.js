import React from "react";
import Carousel from "react-bootstrap/Carousel";
import labcoat1 from "../Images/labcoat1.jpg";
const SlideShow = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item style={{ height: "500px" }}>
        <div>
          <img className="d-block w-100 h" src='https://www.istockphoto.com/photo/young-nurse-indoors-in-modern-clinic-conception-of-healthcare-gm1327093419-411556814.jpg' alt="First slide"  style={{ height: "500px" }} />
        </div>

        <Carousel.Caption>
          <h5>Women's medical lab coats</h5>
          <p>
            Discover lab coats in a completely new way. Beautiful cuts, unique
            colours and practical features to change your look.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.uniformshop.eu/!uploads/products/b_506-fartuch-medyczny-meski-maevn-red-panda-bialy-dlugi-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Men's medical lab coats</h5>
          <p>
            A well-cut coat is a necessary part of every doctor’s or nurse’s
            wardrobe. Choose the one that will enhance your professional look.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.uniformshop.eu/!uploads/products/b_img_3559.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Women's scrub sets</h5>
          <p>
            Carefully selected sets so you can create a fashionable modern
            professional outfit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.uniformshop.eu/!uploads/products/b_img_0933.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Men's medical sets</h5>
          <p>
            Are you looking for a professional outfit that will be both stylish
            and practical? A ready scrubs set will be a perfect answer to your
            needs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.uniformshop.eu/!uploads/products/b_a-545_p.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Medical caps</h5>
          <p>
            Many colours and patterns. You can easily find something for you!
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
