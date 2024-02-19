<template>
  <div class="hero-section">
    <div class="container">
      <h1>Превращаем строительство в искусство с Real Mix</h1>
      <p class="subheader">Высшее качество и инновации в каждом мешке нашей продукции</p>
      <button class="order-button" @click="scrollToAddress">Заказать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollToAddress() {
      const addressSection = document.getElementById('address');
      if (addressSection) {
        addressSection.scrollIntoView({ behavior: 'smooth'});
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.hero-section {
  background-image: url('../assets/bg.jpg');
  background-size: cover;
  background-position: center;
  text-align: left;
  padding: 200px 0 80px 0;
  color: white;
}

h1 {
  font-size: 4rem;
  margin: 0 0 20px 0;
  max-width: 50%;
  font-weight: 700;
  position: relative;
}

h1::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: #FFD631;
}

.subheader {
  margin: 0 0 30px 0; /* Adjust spacing as needed */
  font-size: 1.5rem;
  max-width: 50%;
}

.order-button {
  padding: 10px 50px; /* Adjust button padding as needed */
  background-color: #F40021; /* Adjust button background color as needed */
  border: none;
  border-radius: 50px; /* Adjust border-radius as needed */
  color: white; /* Adjust button text color as needed */
  cursor: pointer;
  font-weight: 600;
}

.order-button:hover {
  background-color: #bf0019; /* Darker shade for hover effect, adjust as needed */
}

@media (max-width: 969px) {
  h1, .subheader {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  h1, .subheader {
    max-width: 100%;
  }
  h1 {
    font-size: 2.5rem;
}
}

</style>
