import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Header() {
  const sliderImages = [
    './podible2.jpeg',
    './posibleeeee.jpeg',
    '../posibles3.jpeg',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // cambiar a 2000 para cambiar cada 2 segundos
  };

  return (
    <section id="Home">
      <Slider {...sliderSettings}>
        {sliderImages.map((image, index) => (
          <div key={index}>
            <div
              className="w-screen"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '50vh', // Altura predeterminada para computadora
              }}
            >
              {/* Estilo adicional para dispositivos móviles */}
              <style>
                {`
                 @media screen and (max-width: 767px) {
                  .slick-slide div {
                    background-size: contain !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    height: 17vh !important; // Ajustar la altura de la imagen para dispositivos móviles
                  }
                }

                  @media screen and (max-width: 1024px) {
                    .slick-slide div {
                      background-size: cover !important;
                      background-repeat: no-repeat !important;
                      background-position: center !important;
                      height: 20vh !important; // Ajustar la altura de la imagen para dispositivos iPad
                    }
                  }
                `}
              </style>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
