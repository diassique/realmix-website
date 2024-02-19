<template>
  <div class="why-us-section" style="background-color: #FFD631;">
    <div class="container">
      <h2 class="why-us-title">ПОЧЕМУ МЫ</h2>
      <div class="stats">
        <div class="stat" v-for="stat in stats" :key="stat.id" data-aos="fade-up">
          <img :src="require(`@/assets/icons/${stat.icon}.svg`)" :alt="stat.title" class="stat-icon" />
          <div class="stat-info">
            <h3 class="stat-number">{{ stat.number }}</h3>
            <p class="stat-description">{{ stat.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="video-container">
    <video class="why-us-video" autoplay loop muted>
      <source src="@/assets/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <button class="video-order-button" @click="scrollToAddress">Заказать</button>
  </div>
</template>

<script>
export default {
  name: 'WhyUsSection',
  data() {
    return {
      stats: [
        { id: 1, number: '13 лет', title: 'Работы компании', icon: '1' },
        { id: 2, number: '11243', title: 'Заказов выполнено', icon: '2' },
        { id: 3, number: '4500+', title: 'Довольных клиентов', icon: '3' },
        { id: 4, number: '12', title: 'Наград получено', icon: '4' },
      ]
    };
  },
  methods: {
    scrollToAddress() {
      const addressSection = document.getElementById('address');
      if (addressSection) {
        addressSection.scrollIntoView({ behavior: 'smooth'});
      }
    },
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.why-us-section {
  /* position: relative; */
  overflow: hidden;
  text-align: center;
  padding: 60px 0px 120px 0px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-image: url('../assets/lines.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.video-container {
  position: relative;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  height: 300px;
  max-width: 1200px;
  margin: -150px auto 0;
  border-radius: 30px;
  overflow: hidden;
  z-index: 200;
}
.why-us-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.why-us-title {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #000;
}

.video-order-button {
  position: absolute;
  bottom: 20px; /* Position it 10px above the bottom edge of the video container */
  left: 40px; /* Position it 20px from the left edge of the video container */
  width: 100px; /* Adjust as needed */
  height: 100px; /* Adjust as needed */
  border-radius: 50%;
  background-color: #E70019;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  z-index: 10000; /* Ensure this is above the video container */
}

.stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
}
.stat {
  text-align: center;
}
.stat-icon {
  width: 80px;
  height: auto;
}
.stat-number {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 10px;
}
.stat-description {
  font-size: 1rem;
}
.why-us-image {
  position: relative;
}
.order-button {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e84118;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.order-button:hover {
  background-color: #c23616;
}
@media (max-width: 768px) {
  .stats {
    flex-direction: column;
  }
  .why-us-image img {
    width: 100%;
  }
}
</style>
