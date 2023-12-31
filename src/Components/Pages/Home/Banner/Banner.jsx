import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import slider1 from '../../../../assets/Slider/slider1.jpg';
import slider2 from '../../../../assets/Slider/slider2.jpg';
import slider3 from '../../../../assets/Slider/slider3.jpg';
import slider4 from '../../../../assets/Slider/slider4.jpg';

const Banner = () => {

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
  };

    return (
      <Slider {...settings}>
          <div id="slide1" className="carousel-item relative w-full">
    <img src={slider1} className="w-full lg:h-[800px] brightness-50" />
    <div className='absolute top-0 w-full h-full text-white'>
        <div className='flex justify-center items-center h-full'>
            <div className='text-center space-y-4 w-[80%]'>
                <h1 className="text-xl lg:text-6xl">The Future of Artificial Intelligence</h1>
                <p className="text-sm lg:text-2xl text-gray-400">Explore the cutting-edge developments in artificial intelligence and how they are shaping our world. Find out what the future holds for AI technology.</p>
            </div>
        </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slider2} className="w-full lg:h-[800px] brightness-50" />
    <div className='absolute top-0 w-full h-full text-white'>
        <div className='flex justify-center items-center h-full'>
            <div className='text-center space-y-4 w-[80%]'>
                <h1 className="text-xl lg:text-6xl">Mastering the Art of Photography</h1>
                <p className="text-sm lg:text-2xl text-gray-400">Learn the secrets of great photography and how to capture stunning images. Enhance your photography skills with our expert tips and tricks.</p>
            </div>
        </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slider3} className="w-full lg:h-[800px] brightness-50" />
    <div className='absolute top-0 w-full h-full text-white'>
        <div className='flex justify-center items-center h-full'>
            <div className='text-center space-y-4 w-[80%]'>
                <h1 className="text-xl lg:text-6xl">Travel Destinations: Hidden Gems</h1>
                <p className="text-sm lg:text-2xl text-gray-400">Uncover the worlds hidden travel gems, places off the beaten path that offer unique experiences. Get ready to embark on unforgettable adventures!</p>
            </div>
        </div>
    </div>
    
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={slider4} className="w-full lg:h-[800px] brightness-50" />
    <div className='absolute top-0 w-full h-full text-white'>
        <div className='flex justify-center items-center h-full'>
            <div className='text-center space-y-4 w-[80%]'>
                <h1 className="text-xl lg:text-6xl">10 Tips for Healthy Living</h1>
                <p className="text-sm lg:text-2xl text-gray-400">Discover our top 10 tips for maintaining a healthy lifestyle, from proper nutrition to regular exercise. Start your journey to a happier and healthier you!</p>
            </div>
        </div>
    </div>
  </div>
          </Slider>
    );
};

export default Banner;