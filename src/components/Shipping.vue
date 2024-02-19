<template>
  <section id="shipping">
    <div class="shipping-section">
      <div class="container">
        <h2 class="section-title">Доставка</h2>
      </div>
      <div class="shipping-container container">
        <div class="shipping-step" v-for="(step, index) in steps" :key="index" @mouseover="hover=true" @mouseleave="hover=false" data-aos="fade-up">
          <div class="step-image" :style="{ backgroundImage: 'url(' + step.image + ')' }">
            <div class="step-number" v-show="hover">{{ index + 1 }}</div>
          </div>
          <div class="step-info">
            <div class="step-step">{{ step.step }}</div>
            <div class="step-text">{{ step.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ShippingSection',
  setup() {
    const hover = ref(false);
    const steps = ref([
      { image: '/Сделать.png', step: '1 шаг.', text: 'Сделать заказ', },
      { image: '/Оплатить.jpg', step: '2 шаг.', text: 'Оплатить заказ' },
      { image: '/Ожидать.jpg', step: '3 шаг.', text: 'Ожидать доставки' },
      { image: '/Подтвердить.jpg', step: '4 шаг.', text: 'Подтвердить получение' },
    ]);

    return { steps, hover };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.section-title {
  font-size: 2rem;
  text-align: left;
  display: inline-block;
  position: relative;
  padding-left: 40px;
  margin: 30px 0;
}
.section-title::before {
  content: "";
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url('../assets/shape.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 10px; 
}
.step-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
.step-step {
  font-weight: 700;
  font-size: 1.4rem;
  color: #6AAB31;
}
.shipping-section {
  padding: 60px 0;
}
.shipping-container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 20px;
}
.shipping-step {
  flex: 1;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.step-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.step-number {
  font-size: 2em;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.step-text {
  text-align: center;
  font-weight: bold;
}
.shipping-step:hover .step-number {
  opacity: 1;
}
.shipping-step:hover {
  transform: translateY(-10px);
}
/* Responsive */
@media (max-width: 768px) {
  .shipping-container {
    flex-direction: column;
    align-items: center;
  }

  .shipping-step {
    width: 90%;
    margin-bottom: 20px;
  }

  .step-info {
    flex-direction: column;
    text-align: center;
  }
  .step-step, .step-text {
    font-size: 1.4rem;
  }

  .step-number {
    font-size: 1.5em;
  }
}
@media (max-width: 480px) {
  .shipping-step {
    width: 100%;
  }

  .step-info {
    gap: 5px;
  }
}
</style>