<template>
  <div class="benefit-card" data-aos="fade-up">
    <div class="benefit-card__icon">
      <font-awesome-icon :icon="['fas', icon]" :style="iconStyles"/>
    </div>
    <div class="benefit-card__text">
      <h3 class="benefit-title">{{ title }}</h3>
      <p class="benefit-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitCard',
  props: {
    icon: String,
    title: String,
    description: String,
  },
  computed: {
    iconStyles() {
      return {
        fontSize: '2.2rem',
        color: '#FBD400',
        marginRight: '20px',
      };
    },
  },
};
</script>

<style scoped>
.benefit-card {
  display: flex;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
}

.benefit-card:hover {
  transition: transform 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-title {
  font-size: 1.25rem;
  color: #000000;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.benefit-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
}
</style>
