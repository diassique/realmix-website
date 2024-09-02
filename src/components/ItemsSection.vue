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
          title: 'Шпатлевка "ROVNOMER"',
          description: 'Финишная шпатлевка. Для внутренних работ. 25 кг.',
          image: '1.png',
        },
        {
          id: 2,
          title: 'Шпатлевка "START PLUS"',
          description: 'Выравгивающая и финишная шпатлевка. Для внутренних работ. 25 кг.',
          image: '2.png',
        },
        {
          id: 3,
          title: 'Шпатлевка "FACTURA F"',
          description: 'Чистовая шпатлевка. Для внутренних наружных работ. 25 кг.',
          image: '3.png',
        },
        {
          id: 4,
          title: 'Чистовик Плюс',
          description: 'Выравнивающая и финишная шпатлевка. Для внутренних работ. 25 кг.',
          image: '4.png',
        },
        {
          id: 5,
          title: 'Универсальная Гипсовая Штукатурка "GYPSUM FORSE"',
          description: 'Гипсовая штукатурка для внутренних работ. 30 кг.',
          image: '5.png',
        },
        {
          id: 6,
          title: 'Универсальная Гипсовая Штукатурка "ГИПС-ЭКОНОМ"',
          description: 'Для внутренних работ. Белая. 25 кг.',
          image: '6.png',
        },
        {
          id: 7,
          title: 'Гипсовый самовыравнивающийся наливной пол "ГИПСОПОЛ"',
          description: 'Для внутренних работ. 30 кг.',
          image: '7.png',
        },
        {
          id: 8,
          title: 'Наливной Пол "РОВНОСТЕЛ"',
          description: 'Для выравнивания основания пола. Для внутренних и наружных работ. 25 кг.',
          image: '8.png',
        },
        {
          id: 9,
          title: 'Универсальная Штукатурка',
          description: 'Для наружных и внутренних работ. 25 кг.',
          image: '9.png',
        },
        {
          id: 10,
          title: 'Клей Для Кафеля',
          description: 'Жаростойкий, усиленный. Для внтуренних и наружных работ. 25 кг.',
          image: '10.png',
        },
        {
          id: 11,
          title: 'Декоративная штукатурка "ДЕКОРАТ"',
          description: 'Для внутренних и наружных работ ручного нанесения. 25 кг.',
          image: '11.png',
        },
        {
          id: 12,
          title: 'Клей Для Газо-Пеноблоков',
          description: 'Тонкослойная, водостойкая, морозостойкая. Для наружных и внутренних работ. 25 кг.',
          image: '12.png',
        },
        {
          id: 13,
          title: 'Штукатурка Цементная',
          description: 'Для наружных и внутренних работ. 25 кг.',
          image: '13.png',
        },
        {
          id: 14,
          title: 'Клей Для Кафеля Усиленный',
          description: 'Морозо-Влагостойкий. Для наружных и внутренних работ. 25 кг.',
          image: '14.png',
        },
        {
          id: 15,
          title: 'Затирка Для Швов (Белая)',
          description: 'Для заполнения швов керамической, кафельной плиток. 5 кг.',
          image: '15.png',
        },
        {
          id: 16,
          title: 'Затирка Для Швов (Серая)',
          description: 'Для заполнения швов керамической, кафельной плиток. 5 кг.',
          image: '16.png',
        },
        {
          id: 17,
          title: 'Черновая Гипсовая Штукатурка',
          description: 'Для внутренних работ. 30 кг.',
          image: '17.png',
        },
        {
          id: 18,
          title: 'ЭКОНОМ Кладочный Клей для Газопеноблоков',
          description: 'Для внутренних и наружных работ. 10 л.',
          image: '18.png',
        },
        {
          id: 19,
          title: 'ЭКОНОМ Выравнивающая Финишная Шпатлевка',
          description: 'Для внутренних работ. 2в1. 25 кг.',
          image: '19.png',
        },
        {
          id: 20,
          title: 'ЭКОНОМ Штукатурка Цементная',
          description: 'Для внутренних и наружных работ. 25 кг.',
          image: '20.png',
        },
        {
          id: 21,
          title: 'ЭКОНОМ Цементный Наливной Пол',
          description: 'Цементный наливной пол. Для внутренних работ. 25 кг.',
          image: '21.png',
        },
        {
          id: 22,
          title: 'ЭКО-ГИПС Гипсовая Штукатурка',
          description: 'Для внутренних работ. 25 кг.',
          image: '22.png',
        },
        {
          id: 23,
          title: 'ЭКОНОМ Кафельный Клей',
          description: 'Для внутренних и наружных работ. 25 кг.',
          image: '23.png',
        },
        {
          id: 24,
          title: 'Усиленная Глубокопроникающая Грунтовка',
          description: 'Бесцветная для внутренних и наружных работ. 5 л.',
          image: '24.png',
        },
        {
          id: 25,
          title: 'Универсальная Высоконаполненная Сцепляющая Грунтовка',
          description: 'Универсальная Высоконаполненная Сцепляющая Грунтовка.',
          image: '25.png',
        },
        {
          id: 26,
          title: 'Интерьерно-протирающаяся Белоснежная водно-дисперсионная акриловая краска',
          description: 'Интерьерно-протирающаяся Белоснежная водно-дисперсионная акриловая краска',
          image: '26.png',
        },
        {
          id: 27,
          title: 'Интерьерно-моющаяся Белоснежная водно-дисперсионная акриловая краска',
          description: 'Интерьерно-моющаяся Белоснежная водно-дисперсионная акриловая краска',
          image: '27.png',
        },
        {
          id: 28,
          title: 'Фасадно-моющаяся Белоснежная водно-дисперсионная акриловая краска',
          description: 'Фасадно-моющаяся Белоснежная водно-дисперсионная акриловая краска',
          image: '28.png',
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
