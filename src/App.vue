<template>
  <!-- header component -->
  <headerComponent />
  <!-- our cursor copmonent -->
  <ourCursor />
  <!-- dark and light btn -->
  <LightDarkComponent />
  <!-- loading component -->
  <LoadingComponent />
  <router-view />
  <!-- Footer Component -->
  <FooterComponent />
</template>
<script>
//Header component
import headerComponent from "../src/components/global/headerComponent.vue";
//our cursor component
import ourCursor from "../src/components/global/OurCursor.vue";
//Light and dark btn component
import LightDarkComponent from "../src/components/global/LightDarkBtn.vue";
//Loading component
import LoadingComponent from "../src/components/global/LoadingComponent.vue";
//Footer component
import FooterComponent from "../src/components/global/FooterComponent.vue";

export default {
  components: {
    headerComponent,
    ourCursor,
    LightDarkComponent,
    LoadingComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
// "syne" font from google fonts to ensures that the font is applied correctly.
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap");
// "DM serif display" from google fonts to ensures that the font is applied correctly.
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap");
// the colors that we will use in the project
:root {
  --light-blue: #38bbff;
  --black: #000000;
  --light-black: #121212;
  --gray: #393939;
  --white: #ffffff;

  --cursor: #ffffff;

  --transparent: transparent;

  --half-white: rgba(255, 255, 255, 0.5);
  --perly-white: rgba(255, 255, 255, 0.1);

  --fancy-font: "DM Serif Display", serif;
}
/* light mode colors */
.light-mode {
  --light-blue: #38bbff !important;
  --black: #ffffff !important;
  --light-black: #e6e6e6 !important;
  --gray: #999999 !important;
  --white: #000000 !important;
  --cursor: #393939 !important;
  --half-white: rgba(0, 0, 0, 0.5) !important;
  --transparent: rgba(0, 0, 0, 0.9) !important;
}
#app {
  font-family: "Syne", sans-serif;
}
body {
  background-color: var(--black) !important;
  color: var(--white) !important;
  overflow-x: hidden;
  cursor: none; /*to hide the cursor and do our cursor*/
}
/* start scrollbar */
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: var(--black);
}
::-webkit-scrollbar-thumb {
  background-color: var(--gray);
  border-radius: 70px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--light-black);
}
/* end scrollbar */
</style>
