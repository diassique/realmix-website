<template>
  <section class="testimonials-section">
    <div class="container" data-aos="fade-up">
      <h2 class="testimonials-title">Наши отзывы</h2>
      <Carousel :itemsToShow="itemsToShow" :wrapAround="true" class="testimonials-carousel">
        <Slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <div class="testimonial-card__row">
              <img :src="testimonial.image" class="testimonial-image" alt="Testimonial author">
              <div class="testimonial-author__date">
                <p class="testimonial-author">{{ testimonial.author }}</p>
                <p class="testimonial-date">{{ testimonial.date }}</p>
              </div>
            </div>
            <p class="testimonial-text">
              "{{ testimonial.showFullText ? testimonial.text : testimonial.text.substring(0, 200) + '...' }}"
            </p>
            <span v-if="testimonial.text.length > 200" @click="toggleShowMore(index)" class="show-more" role="button">
              {{ testimonial.showFullText ? 'СКРЫТЬ' : 'ПОКАЗАТЬ ВЕСЬ ОТЗЫВ' }}
            </span>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'TestimonialsSection',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      itemsToShow: 3,
      testimonials: [
        {
          author: "Кайрат Айымбеков",
          date: "12.09.2023",
          text: "Моя компания долгое время искала надежного поставщика строительных материалов, и выбор 'REAL MIX STROY COMPANY' стал лучшим решением. Их продукция, особенно наливные полы и шпатлевки, существенно улучшила качество наших работ. Кроме того, благодаря их производственным мощностям, мы всегда уверены в своевременной доставке необходимых материалов. Рекомендую 'REAL MIX' как надежного партнера в строительной индустрии.",
          image: "/quotes.svg",
          showFullText: false,
        },
        {
          author: "Гульжан Рысбекова",
          date: "12.09.2023",
          text: "Выбор в пользу 'REAL MIX STROY COMPANY' был сделан после долгих поисков поставщика надежных строительных материалов для ремонта в нашем доме. И мы ни разу не пожалели о своем выборе! Продукция отличается высоким качеством, а разнообразие смесей позволило нам найти идеальное решение для каждой задачи. Отдельно хочется отметить высокий уровень сервиса и оперативность доставки.",
          image: "/quotes.svg",
          showFullText: false,
        },
        {
          author: "Келдібек Русланов",
          date: "12.09.2023",
          text: "Работая с 'REAL MIX STROY COMPANY', я был приятно удивлен их профессионализмом и вниманием к деталям. Продукция, которую мы использовали для строительства, превзошла все наши ожидания по качеству и эффективности. Особенно хочется выделить их клеи и штукатурки, которые обеспечили отличную адгезию и долговечность. Это действительно компания, которая ставит инновации и качество на первое место.",
          image: "/quotes.svg",
          showFullText: false,
        },
      ],
    };
  },
  created() {
    this.adjustItemsToShow();
    window.addEventListener('resize', this.adjustItemsToShow);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustItemsToShow);
  },
  methods: {
    adjustItemsToShow() {
      if (window.innerWidth < 768) {
        this.itemsToShow = 1;
      } else {
        this.itemsToShow = 3; // Adjust as necessary for larger screens
      }
    },
    toggleShowMore(index) {
      this.testimonials[index].showFullText = !this.testimonials[index].showFullText;
    },
  },
};
</script>

<style scoped>
.show-more {
  color: red;
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
  text-align: left;
}
.container {
  max-width: 1200px;
}
.testimonials-section {
  padding: 60px 0 100px 0;
  text-align: left;
  background-color: #F5F5F5;
}
.testimonials-carousel .vue3-carousel__track {
  display: flex;
  align-items: stretch;
}
.testimonials-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
  font-weight: 600;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* This spreads out the content inside the card */
  padding: 1rem;
  border-radius: 20px;
  background-color: #ffffff;
  transition: transform 0.3s ease;
  height: 100%;
  margin: 0 15px;
}

.testimonial-card__row {
  display: flex;
  flex-direction: row; /* Change direction to column to stack children vertically */
  align-items: center; /* Centers the children horizontally in the flex container */
  text-align: center;
}

.testimonial-card img {
  margin-bottom: 10px; /* Adds some space between the image and the text below it */
}

.testimonial-author__date {
  margin-left: 20px;
  text-align: left;
}
.testimonial-author {
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}
.testimonial-date {
  margin-top: 0; /* Ensures there's no additional space above the date */
}
.testimonial-card img {
  width: 60px;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}
.testimonial-text {
  font-size: 1rem;
  color: #555;
  margin: 1.5rem 0;
  text-align: left;
}

</style>
