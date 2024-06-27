<template>
  <!-- testimonials slider -->
  <div
    id="testimonialsSlider"
    class="carousel slide mt-5"
    style="overflow: hidden"
  >
    <!-- navigation dashes -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#testimonialsSlider"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#testimonialsSlider"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#testimonialsSlider"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <!-- testimonials in the slider -->
    <div class="carousel-inner" data-aos="fade-up" data-aos-delay="100">
      <div class="carousel-item active">
        <div class="box">
          <div class="client">
            <img src="../../assets/img/team-1.webp" alt="" />
            <div class="client-info">
              <h1 class="name">Mark Evans</h1>
              <div class="title">Game Developer</div>
            </div>
          </div>
          <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            nulla sapiente reprehenderit quam ipsum, dolor sit amet adipisicing
            elit"
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
            />
          </svg>
        </div>
      </div>
      <div class="carousel-item">
        <div class="box">
          <div class="client">
            <img src="../../assets/img/team-2.webp" alt="" />
            <div class="client-info">
              <h1 class="name">John doe</h1>
              <div class="title">web Developer</div>
            </div>
          </div>
          <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            nulla sapiente reprehenderit quam ipsum, dolor sit amet adipisicing
            elit"
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
            />
          </svg>
        </div>
      </div>
      <div class="carousel-item">
        <div class="box">
          <div class="client">
            <img src="../../assets/img/team-3.webp" alt="" />
            <div class="client-info">
              <h1 class="name">Robert Dawney</h1>
              <div class="title">Graphic designer</div>
            </div>
          </div>
          <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            nulla sapiente reprehenderit quam ipsum, dolor sit amet adipisicing
            elit"
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- prev btn -->
    <button
      class="prev"
      type="button"
      data-bs-target="#testimonialsSlider"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <!-- next btn -->
    <button
      class="next"
      type="button"
      data-bs-target="#testimonialsSlider"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      <!-- <img src="../../assets/icons/arrow.svg" alt="" /> -->
    </button>
  </div>
</template>
<style scoped>
/* to have dome space in page */
.carousel {
  padding: 80px 0;
}
/* navigation dashes */
.carousel-indicators [data-bs-target] {
  width: 15px;
  height: 1px;
  background-color: var(--white);
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
  background-color: #121212;
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
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
/* change the icons of prev and next btn */
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 448 512'%3E%3Cpath d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z'/%3E%3C/svg%3E") !important;
  width: 15px;
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 448 512'%3E%3Cpath d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z'/%3E%3C/svg%3E") !important;
  width: 15px;
}
/* height of the testimonials */
.carousel-inner {
  height: 340px;
}
/* style of the clients review in testimonials */
.box {
  background-color: var(--light-black);
  padding: 20px;
  width: 900px;
  margin: 0 auto;
  position: relative;
}
.client {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}
.client-info {
  display: flex;
  flex-direction: column;
}
h1 {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0;
}
.title {
  text-transform: uppercase;
  color: var(--light-blue);
  font-size: 20px;
  margin-bottom: 0;
}
svg {
  position: absolute;
  right: 15px;
  bottom: -27px;
  width: 50px;
  fill: var(--white);
}
/* media query of prev and next icons and box */
@media (max-width: 767px) {
  .prev {
    right: 0px;
    left: 10px;
  }
  .next {
    right: 10px;
  }
  .box {
    width: 400px;
  }
  img {
    width: 90px;
    height: 90px;
  }
  h1 {
    font-size: 25px;
  }
  .title {
    font-size: 18px;
  }
  svg {
    right: 55px;
  }
}
</style>
