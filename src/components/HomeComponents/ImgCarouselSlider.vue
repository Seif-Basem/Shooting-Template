<template>
  <!-- img slider -->
  <div id="carouselExampleIndicators" class="carousel slide">
    <!-- navigation dashes -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>
    <!-- imgs in the slider -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <!-- black to transparetn overlay -->
        <div class="overlay-to-top"></div>
        <div class="overlay-to-right"></div>
        <!-- img -->
        <img src="@/assets/img/landing-1.webp" alt="landing-1" />
        <!-- slide caption -->
        <div class="content">
          <h1 data-aos="fade-right" data-aos-delay="1300">
            PORT <br />
            FOLIO
          </h1>
          <div class="info" data-aos="fade-right" data-aos-delay="1400">
            <a href="" aria-label="got to about page">
              <router-link to="/portfolio">about port</router-link>
            </a>
            <div class="line"></div>
            <div class="welcome">
              Welcome to <br />
              our website
            </div>
          </div>
          <div class="title" data-aos="fade-right" data-aos-delay="1500">
            <span> professional </span>
            Game Development
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <!-- black to transparetn overlay -->
        <div class="overlay-to-top"></div>
        <div class="overlay-to-right"></div>
        <img src="../../assets/img/landing-2.webp" alt="landing-2" />
        <!-- slide caption -->
        <div class="content">
          <h1>
            BEST <br />
            SUV
          </h1>
          <div class="info">
            <a href="" aria-label="got to about page">
              <router-link to="/about">more about</router-link>
            </a>
            <div class="line"></div>
            <div class="welcome">
              the best <br />
              website
            </div>
          </div>
          <div class="title">
            <span> professional </span>
            Car Expert
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <!-- black to transparetn overlay -->
        <div class="overlay-to-top"></div>
        <div class="overlay-to-right"></div>
        <img src="../../assets/img/landing-3.webp" alt="landing-3" />
        <!-- slide caption -->
        <div class="content">
          <h1>
            our <br />
            works
          </h1>
          <div class="info">
            <a href="" aria-label="got to about page">
              <router-link to="/works">about works</router-link>
            </a>
            <div class="line"></div>
            <div class="welcome">
              the best <br />
              work
            </div>
          </div>
          <div class="title">
            <span> professional </span>
            work Expert
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <!-- black to transparetn overlay -->
        <div class="overlay-to-top"></div>
        <div class="overlay-to-right"></div>
        <img src="../../assets/img/landing-4.webp" alt="landing-4" />
        <!-- slide caption -->
        <div class="content">
          <h1>
            our <br />
            services
          </h1>
          <div class="info">
            <a href="" aria-label="got to about page">
              <router-link to="/services">about services</router-link>
            </a>
            <div class="line"></div>
            <div class="welcome">
              the best <br />
              service
            </div>
          </div>
          <div class="title">
            <span> professional </span>
            service Expert
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <!-- black to transparetn overlay -->
        <div class="overlay-to-top"></div>
        <div class="overlay-to-right"></div>
        <img src="../../assets/img/landing-5.webp" alt="landing-5" />
        <!-- slide caption -->
        <div class="content">
          <h1>
            contact <br />
            us
          </h1>
          <div class="info">
            <a href="" aria-label="got to about page">
              <router-link to="/contact">contact us</router-link>
            </a>
            <div class="line"></div>
            <div class="welcome">
              the best <br />
              contact
            </div>
          </div>
          <div class="title">
            <span> professional </span>
            contact Expert
          </div>
        </div>
      </div>
    </div>
    <!-- prev btn -->
    <button
      class="prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <!-- next btn -->
    <button
      class="next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped>
/* navigation dashes */
.carousel-indicators [data-bs-target] {
  width: 15px;
  height: 1px;
}
/* overlay from black to transparent on imgs*/
.overlay-to-top,
.overlay-to-right {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.overlay-to-top {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8743872549019608) 0%,
    rgba(0, 53, 255, 0) 100%
  );
}
.overlay-to-right {
  background: linear-gradient(
    90deg,
    rgb(0 0 0 / 23%) 0%,
    rgba(0, 53, 255, 0) 100%
  );
}
/* img style */
.carousel-item img {
  display: block;
  width: 100%;
}
/* slide caption */
.content {
  position: absolute;
  top: 30%;
  left: 5%;
  text-align: start;
  color: white;
}
.content h1 {
  font-size: 100px;
  font-weight: 800;
  line-height: 0.8;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.content .info {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: 40px;
  margin-bottom: 20px;
}
.content .info a {
  color: white;
  transition: 0.4s;
  text-decoration: none;
}
.content .info a:hover {
  text-decoration: underline;
}
.content .info .line {
  width: 100px;
  height: 2px;
  background-color: white;
}
.content .info .welcome {
  font-size: 22px;
  line-height: 1;
}
.content .title {
  font-size: 50px;
  font-family: var(--fancy-font);
  letter-spacing: 1.5px;
}
.content .title {
  text-transform: uppercase;
}
.content .title span {
  text-transform: lowercase;
  font-style: italic;
  font-size: 30px;
  padding-right: 8px;
}
/* media queary slide caption */
@media (max-width: 991px) {
  .content h1 {
    font-size: 80px;
    margin-bottom: 25px;
  }
  .content .info {
    gap: 30px;
    margin-bottom: 20px;
  }
  .content .title {
    font-size: 30px;
  }
  .content .title span {
    font-size: 20px;
    padding-right: 5px;
  }
}
@media (max-width: 767px) {
  .content h1 {
    font-size: 40px;
  }
  .content .info {
    gap: 10px;
  }
  .content .info a {
    font-size: 13px;
  }
  .content .info .line {
    width: 60px;
  }
  .content .info .welcome {
    font-size: 15px;
  }
  .content .title {
    font-size: 20px;
  }
  .content .title span {
    font-size: 10px;
  }
}
/* prev and next btn */
.prev,
.next {
  position: absolute;
  bottom: 12px;
  background-color: transparent;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid var(--gray);
  transition: 0.4s;
}
.prev {
  right: 194px;
}
.next {
  right: 122px;
}
.prev:hover,
.next:hover {
  background-color: var(--gray);
}
.prev span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(224deg);
}
.next span {
  position: absolute;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%) rotate(45deg);
}
/* change the icons of prev and next btn */
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 448 512'%3E%3Cpath d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z'/%3E%3C/svg%3E") !important;
  width: 11px;
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 448 512'%3E%3Cpath d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z'/%3E%3C/svg%3E") !important;
  width: 11px;
}
/* media query of prev and next icons */
@media (max-width: 767px) {
  .prev {
    right: 0px;
    left: 10px;
  }
  .next {
    right: 10px;
  }
}
</style>
