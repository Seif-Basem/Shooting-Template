<template>
  <div v-if="isLoading" class="loading">
    <div class="load-wrapp">
      <div class="load-2">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
// this code is to show the loading when the page load
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    window.addEventListener("load", this.hideLoader);
    if (document.readyState === "complete") {
      this.hideLoader();
    }
  },
  beforeUnmount() {
    window.removeEventListener("load", this.hideLoader);
  },
  methods: {
    hideLoader() {
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--black);
  z-index: 100;
}
.load-wrapp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.line {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: var(--light-blue);
}
.load-2 .line:nth-last-child(1) {
  animation: loadingB 1.5s 1s infinite;
}
.load-2 .line:nth-last-child(2) {
  animation: loadingB 1.5s 0.5s infinite;
}
.load-2 .line:nth-last-child(3) {
  animation: loadingB 1.5s 0s infinite;
}
@keyframes loadingB {
  0 {
    width: 15px;
  }
  50% {
    width: 35px;
  }
  100% {
    width: 15px;
  }
}
</style>
