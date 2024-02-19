<template>
  <div class="parallax-section">
    <div class="text-wrapper" data-aos="fade-up">
      <text class="parallax-title">REAL MIX</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RealmixSection',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const offset = window.pageYOffset;
      document.querySelector('.parallax-title').style.backgroundPosition = `center ${offset * 0.5}px`;
    },
  },
};

</script>

<style scoped>
.parallax-section {
  position: relative;
  overflow: hidden;
  height: 300px; /* Adjusted to your new height */
  width: 100%; /* Ensure the section takes the full width */
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.text-wrapper {
  width: 100%; /* Ensures the wrapper takes the full width of the parent */
  display: flex; /* Utilizes flexbox for centering */
  justify-content: center; /* Centers horizontally in the flex container */
  align-items: center; /* Centers vertically in the flex container */
  text-align: center; /* Ensures text itself is centered if it wraps */
}

.parallax-title {
  font-size: calc(10vw + 5rem); /* Dynamically adjust based on viewport width */
  font-weight: 700;
  background-image: url('../assets/building.jpg');
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: none;
  margin: 0;
  user-select: none;
  white-space: nowrap; /* Prevents the text from wrapping */
}

@media (max-width: 768px) {
  .parallax-title {
    font-size: calc(5vw + 4.5rem); /* Adjust the formula as needed for smaller screens */
  }
  .parallax-section {
    height: 100px;
  }
}
</style>
