import ProductCard from '../card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';

const ProductCarousel = ({ data }) => {
  const { carouselData = [] } = data;

  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive
  };
  return (
    <section className='container'>
      <h2 className='header'>Related products</h2>
      <Slider {...settings} className='slider'>
        {carouselData.map((product) => (
          <ProductCard {...product} key={product.code} />
        ))}
      </Slider>
    </section>
  );
};

export default ProductCarousel;
