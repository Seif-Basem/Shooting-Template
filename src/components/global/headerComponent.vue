<template>
  <header :class="{ scrolled: isScrolled }" style="overflow: hidden">
    <div
      class="container-fluid wrapper"
      data-aos="fade-down"
      data-aos-delay="500"
    >
      <!-- logo -->
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/img/logo.svg" alt="Shooting logo" />
        </router-link>
      </div>
      <!-- menu button -->
      <div class="menu" @click="openMenu" :class="{ opend: classAdd }">
        <div class="text">Menu</div>
        <div class="icon">
          <span class="tape1"></span>
          <span class="tape2"></span>
          <span class="tape3"></span>
        </div>
      </div>
    </div>
  </header>
  <!-- the menu -->
  <div class="nav-slider" :class="{ openMenu: classAdd }">
    <div class="container">
      <h1>MENU</h1>
      <ul>
        <li @click="openMenu">
          <router-link to="/">Home</router-link>
        </li>
        <li @click="openMenu">
          <router-link to="/about">About</router-link>
        </li>
        <li @click="openMenu">
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        <li @click="openMenu">
          <router-link to="/works">Works</router-link>
        </li>
        <li @click="openMenu">
          <router-link to="/services">Services</router-link>
        </li>
        <li @click="openMenu">
          <router-link to="/faq">FAQ</router-link>
        </li>
        <li @click="openMenu">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
      <img src="../../assets/img/portfolio-2.webp" alt="soldier-photo" />
    </div>
  </div>
</template>

<style>
/*css header style*/
@import "../../css/HeaderStyle.css";
</style>

<script>
// this code is background appears for the header when scroll
export default {
  data() {
    return {
      classAdd: false,
      isScrolled: false,
    };
  },
  methods: {
    openMenu() {
      this.classAdd = !this.classAdd;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 250;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
