<template>
  <section id="items">
    <div class="items-section">
      <div class="container">
        <h2 class="section-title">Товары</h2>
        <p class="section-description">Ознакомьтесь с нашим ассортиментом строительных смесей. Мы неустанно работаем над улучшением и расширением нашей продуктовой линейки.</p>
        <div class="items-grid">
          <ItemCard v-for="(item, index) in visibleItems" :key="index" :item="item" />
        </div>
        <button v-if="visibleCount < items.length" class="show-more-button" @click="showMore">
          Показать еще
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ItemCard from './ItemCard.vue';

export default {
  name: 'ItemsSection',
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Шпатлевка "Черновик"',
          description: 'Выравнивающая шпатлевка. Для внутренних работ. 25 кг.',
          image: '1.jpg',
        },
        {
          id: 2,
          title: 'Шпатлевка "Чистовик"',
          description: 'Финишная шпатлевка. Для внутренних работ. 25 кг.',
          image: '2.jpg',
        },
        {
          id: 3,
          title: 'Шпатлевка "Чистовик F"',
          description: 'Чистовая шпатлевка. Для наружных работ. 25 кг.',
          image: '3.jpg',
        },
        {
          id: 4,
          title: 'Чистовик Плюс',
          description: 'Выравнивающая и финишная шпатлевка. Для внутренних работ. 25 кг.',
          image: '4.jpg',
        },
        {
          id: 5,
          title: 'Гипсовая Штукатурка Гипс Эконом',
          description: 'Гипсовая штукатурка для внутренних работ. 25 кг.',
          image: '5.jpg',
        },
        {
          id: 6,
          title: 'Универсальная Штукатурка',
          description: 'Для наружных и внутренних работ. Для теплоизоляционных материалов. 25 кг.',
          image: '6.jpg',
        },
        {
          id: 7,
          title: 'Цементная Штукатурка',
          description: 'Для наружных и внутренних работ. 25 кг.',
          image: '7.jpg',
        },
        {
          id: 8,
          title: 'Затирка для Швов (Белая)',
          description: 'Для швов кафельной и керамической плитки, эластичная, водостойкая, белая. 5 кг.',
          image: '8.jpg',
        },
        {
          id: 9,
          title: 'Затирка для Швов (Серая)',
          description: 'Для швов кафельной и керамической плитки, эластичная, водостойкая, серая. 5 кг.',
          image: '9.jpg',
        },
        {
          id: 10,
          title: 'Штукатурка "Декорат"',
          description: 'Декоративная штукатурка для внутренних и наружных работ ручного нанесения. 25 кг.',
          image: '10.jpg',
        },
        {
          id: 11,
          title: 'Наливной Пол "Ровностел"',
          description: 'Для внутренних и наружных работ. Повышенное сцепление. Нулевая усадка. Водостойкий. 25 кг.',
          image: '11.jpg',
        },
        {
          id: 12,
          title: 'Штукатурка "Термопласт"',
          description: 'Универсальная гипсовая штукатурка машинного и ручного нанесения для внутренних работ. 25 кг.',
          image: '12.jpg',
        },
        {
          id: 13,
          title: 'Клей для Кафеля',
          description: 'Морозо-Влагостойкий. Для наружных и внутренних работ. 25 кг.',
          image: '13.jpg',
        },
        {
          id: 14,
          title: 'Клей для Газоблоков и Пеноблоков',
          description: 'Тонкослойная, водостойкая, морозостойкая. Высокая адгезия и пластичность. 25 кг.',
          image: '14.jpg',
        },
        {
          id: 15,
          title: 'Клей для Кафеля Морозостойкий',
          description: 'Морозо-Влагостойкий. Для наружных и внутренних работ. 25 кг.',
          image: '13.jpg',
        },
        {
          id: 16,
          title: 'Клей для Кафеля Жаростойкий',
          description: 'Для приклеивания фаянса, гранита для печей и каминов. Для внутренних работ. 25 кг.',
          image: '15.jpg',
        },
        {
          id: 17,
          title: 'Глубокопроникающая Грунтовка',
          description: 'Бесцветная для внутренних и наружных работ. 5 л.',
          image: '16.jpg',
        },
        {
          id: 18,
          title: 'Глубокопроникающая Грунтовка',
          description: 'Бесцветная для внутренних и наружных работ. 10 л.',
          image: '16.jpg',
        },
      ],
      visibleCount: 12,
    };
  },
  computed: {
    visibleItems() {
      return this.items.slice(0, this.visibleCount);
    },
  },
  methods: {
    showMore() {
      this.visibleCount = this.items.length;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.items-section {
  position: relative;
  padding: 60px 0px 100px 0px;
}
.items-section::before {
  content: "";
  position: absolute;
  top: 300px;
  right: 100;
  width: 500px;
  height: 500px;
  background-image: url('~@/assets/decor-1.png');
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -2;
}

.items-section::after {
  content: "";
  position: absolute;
  bottom: 150px;
  right: 150px;
  width: 250px;
  height: 250px;
  background-image: url('~@/assets/decor-2.png');
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -3;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: left;
  display: inline-block;
  position: relative;
  padding-left: 40px;
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

.section-description {
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: left;
  max-width: 600px;
}
.items-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}


.show-more-button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.show-more-button:hover {
  background-color: darkred;
}

@media (max-width: 992px) {
  .items-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .items-section::before {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .items-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
