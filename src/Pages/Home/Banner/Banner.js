import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.png';
import banner2 from '../../../images/banner/banner-2.png';
import banner3 from '../../../images/banner/banner-3.png';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First Banner"
                    />
                    <Carousel.Caption>
                        <h3>Fragrance</h3>
                        <p>PURE Presents Pure Flower</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second Banner"
                    />

                    <Carousel.Caption>
                        <h3>Fragrance</h3>
                        <p>Bergamot for the Lady and Bergamot for the Gentleman</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third Banner"
                    />

                    <Carousel.Caption>
                        <h3>Fragrance</h3>
                        <p>Caron added Rose Croquante to its La Collection Merveilleuse</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;