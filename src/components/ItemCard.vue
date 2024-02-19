<template>
  <div class="item-card">
    <div class="item-image">
      <img :src="require(`@/assets/products/${item.image}`)" alt="Product" />
    </div>
    <h3 class="item-title">{{ item.title }}</h3>
    <p class="item-description">{{ item.description }}</p>
    <button class="order-button" @click="scrollToAddress">Заказать</button>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    scrollToAddress() {
      const addressSection = document.getElementById('address');
      if (addressSection) {
        addressSection.scrollIntoView({ behavior: 'smooth'});
      }
    }
  }
};
</script>

<style scoped>
.item-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #fff;
  cursor: pointer;
  display: flex; /* Using flexbox */
  flex-direction: column; /* Stack children vertically */
  justify-content: space-between; /* Align children to start and end */
  height: 100%; 
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.item-image img {
  width: 80%;
  display: block;
  object-fit: cover; /* Adjust as needed based on your images */
}

.item-title {
  color: #333;
  font-size: 1.2rem;
  margin: 16px; /* Adjust spacing as needed */
  font-weight: 600;
}

.item-description {
  color: #666;
  font-size: 14px;
  margin: 0 16px 16px;
  font-weight: 400;
  line-height: 1.4;
}

.order-button {
  background-color: #FFD631; /* Button color */
  border: none;
  padding: 12px 24px;
  margin: 16px;
  border-radius: 5px;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: block; /* Makes the button take the full width of the card */
  text-align: center; /* Centers the text in the button */
}

.order-button:hover {
  background-color: #cca42b; /* A slightly darker yellow */
  color: #fff;
}
</style>

