import { Swiper, SwiperSlide } from "swiper/react";
import { useThemeContext } from "../../context/Context";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Style.scss";

const Project = () => {
  const { theme } = useThemeContext();

  const lightTheme = {
    background: "linear-gradient(190deg, #21214F, #85374E)",
  };

  const darkTheme = {
    background: "",
  };

  const heroStyles = (theme) => ({
    background:
      theme === "light" ? lightTheme.background : darkTheme.background,
  });
  return (
    <div className="project_cont" style={heroStyles(theme)}>
      <div className="container">
        <div className="expore_project">
          <h2
            style={{
              color: theme === "light" ? "#fff" : "",
            }}>
            Explore Our Projects
          </h2>
          <p>
            Witness the Impact of Infonomics Technology Services. Check out our
            diverse portfolio
          </p>
        </div>
        <Swiper
          centeredSlides={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1071: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper">
          <SwiperSlide>
            <div className="swipe-data">
              <img src="/globe.svg" />
              <h4>IFS Localization Services</h4>
              <p>
                We provided localized solutions within the IFS framework to meet
                specific regional requirements and ensure seamless global
                operations
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swipe-data">
              <img src="/file.svg" />
              <h4>DCBS/EB Billing Services Solution Delivery</h4>
              <p>
                We Implement robust billing solutions to ensure accuracy and
                efficiency in financial transactions, meeting the specific needs
                of DCBS/EB systems
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swipe-data">
              <img src="/docs.svg" />
              <h4>
                Detailed Design and Development of PDF Conversion Solution
              </h4>
              <p>
                We create a customized solution for PDF conversion, offering
                efficiency and accuracy in document processing
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swipe-data">
              <img src="/barcode.svg" />
              <h4>Sales and Distribution (S&D) Digitization Solution</h4>
              <p>
                We digitize and optimize the sales and distribution processes to
                improve accuracy, efficiency, and overall customer experience
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>{" "}
    </div>
  );
};

export default Project;
