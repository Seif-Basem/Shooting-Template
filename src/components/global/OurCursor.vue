<template>
  <!-- our cursor animation -->
  <div class="cursor-dot" ref="cursorDot"></div>
  <div class="cursor-outline" ref="cursorOutline"></div>
</template>

<script>
// this code is for tracking the mouse
export default {
  data() {
    return {
      cursorDot: null,
      cursorOutline: null,
      lastMouseX: 0,
      lastMouseY: 0,
      outlineX: 0,
      outlineY: 0,
    };
  },
  mounted() {
    this.cursorDot = this.$refs.cursorDot;
    this.cursorOutline = this.$refs.cursorOutline;
    document.addEventListener("mousemove", this.handleMouseMove);
    this.animateOutline();
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    handleMouseMove(e) {
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
      this.cursorDot.style.left = `${e.clientX}px`;
      this.cursorDot.style.top = `${e.clientY}px`;
    },
    animateOutline() {
      const moveSpeed = 0.1; // Adjust speed here

      const distX = this.lastMouseX - this.outlineX;
      const distY = this.lastMouseY - this.outlineY;

      this.outlineX += distX * moveSpeed;
      this.outlineY += distY * moveSpeed;

      this.cursorOutline.style.left = `${this.outlineX}px`;
      this.cursorOutline.style.top = `${this.outlineY}px`;

      requestAnimationFrame(this.animateOutline);
    },
  },
};
</script>

<style>
/* start our cursor */
.cursor-dot {
  width: 5px;
  height: 5px;
  background-color: var(--cursor);
}
.cursor-outline {
  width: 30px;
  height: 30px;
  border: 2px solid var(--cursor);
  transition: transform 0.1s ease-out;
}
.cursor-dot,
.cursor-outline {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 100;
  pointer-events: none;
}
@media (max-width: 767px) {
  .cursor-dot,
  .cursor-outline {
    display: none;
  }
}
/* end our cursor */
</style>
