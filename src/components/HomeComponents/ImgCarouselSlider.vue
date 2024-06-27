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
      </div>
      <div class="carousel-item">
        <!-- black to transparetn overlay -->
        <div class="overlay-to-top"></div>
        <div class="overlay-to-right"></div>
        <img src="../../assets/img/landing-2.webp" alt="landing-2" />
      </div>
      <div class="carousel-item">
        <!-- black to transparetn overlay -->
        <div class="overlay-to-top"></div>
        <div class="overlay-to-right"></div>
        <img src="../../assets/img/landing-3.webp" alt="landing-3" />
      </div>
      <div class="carousel-item">
        <!-- black to transparetn overlay -->
        <div class="overlay-to-top"></div>
        <div class="overlay-to-right"></div>
        <img src="../../assets/img/landing-4.webp" alt="landing-4" />
      </div>
      <div class="carousel-item">
        <!-- black to transparetn overlay -->
        <div class="overlay-to-top"></div>
        <div class="overlay-to-right"></div>
        <img src="../../assets/img/landing-5.webp" alt="landing-5" />
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
      <!-- <img src="../../assets/icons/arrow.svg" alt="" /> -->
    </button>
  </div>
</template>
<style scoped>
/* navigation dashes */
.carousel-indicators [data-bs-target] {
  width: 15px;
  height: 1px;
}
/* img style */
.carousel-item img {
  display: block;
  width: 100%;
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
