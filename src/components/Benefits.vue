<template>
  <section class="benefits">
    <div class="container">
      <h2 class="benefits-title">Преимущества</h2>
      <div class="benefits-grid">
        <BenefitCard
          v-for="benefit in benefits"
          :key="benefit.id"
          :icon="benefit.icon"
          :title="benefit.title"
          :description="benefit.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BenefitCard from './BenefitsCard.vue';

export default {
  name: 'BenefitsSection',
  components: {
    BenefitCard
  },
  data() {
    return {
      benefits: [
        { id: 1, icon: 'fa-building', title: 'Качество', description: 'Наши строительные смеси – это смеси самого высокого качества, которое доказано годами репутации.' },
        { id: 2, icon: 'fa-wrench', title: 'Инновации', description: 'Строительные смеси Real Mix производятся по самыми последними зарубежными стандартами.' },
        { id: 3, icon: 'fa-university', title: 'Расход', description: 'Расход строительных смесей Real Mix в разы меньше традиционных цементно-песчаных смесей.' },
        { id: 4, icon: 'fa-paint-brush', title: 'Использование', description: 'Наши смеси удобны в использовании, так как легко и быстро наносятся на многие виды поверхностей.' },
        { id: 5, icon: 'fa-magic', title: 'Экологичность', description: 'Материалы изготовлены из экологически чистых материалов и не содержат вредных для здоровья веществ.' },
        { id: 6, icon: 'fa-bullhorn', title: 'Бренд', description: 'Строительные смеси Real Mix являются одним из лидеров на рынке строительных смесей Казахстана.' },
      ]
    };
  },
};
</script>

<style scoped>
.benefits {
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.benefits-title {
  font-size: 2rem;
  text-align: left;
  display: inline-block;
  position: relative;
  padding-left: 40px;
  margin: 30px 0;
}

.benefits-title::before {
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

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 992px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
