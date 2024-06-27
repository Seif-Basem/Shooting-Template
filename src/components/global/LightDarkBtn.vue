<template>
  <div class="switch" @click="switchBtn" :class="{ dark: isSwitch }">
    <!-- light icon -->
    <img
      src="../../assets/icons/light.svg"
      alt=""
      :class="{ none: isDisplay }"
    />
    <!-- dark icon -->
    <img
      src="../../assets/icons/dark.svg"
      alt=""
      class="none"
      :class="{ block: isBlock }"
    />
  </div>
</template>

<style scoped>
.switch {
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 1%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;
}
.switch:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
/* to change the background color */
.dark {
  background-color: rgba(82, 82, 82, 0.5);
}
.dark:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
img {
  width: 20px;
  user-select: none;
}
/* none & block to hide the light img and appear the dark img and vice versa */
.none {
  display: none;
}
.block {
  display: block;
}
@media (max-width: 767px) {
  .switch:hover {
    background-color: white;
  }
  .dark:hover {
    background-color: rgba(82, 82, 82, 0.5);
  }
}
</style>

<script>
// this code is to change the icon form light to dark and vice versa
// and to switch the site from dark theme to light theme and vice versa
export default {
  data() {
    return {
      isSwitch: false,
      isDisplay: false,
      isBlock: false,
    };
  },
  methods: {
    switchBtn() {
      this.isSwitch = !this.isSwitch;
      this.isDisplay = !this.isDisplay;
      this.isBlock = !this.isBlock;
      if (this.isSwitch) {
        document.body.classList.add("light-mode");
      } else {
        document.body.classList.remove("light-mode");
      }
    },
  },
};
</script>
