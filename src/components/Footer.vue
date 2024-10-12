<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-column">
        <h3 class="footer-title">Контакты</h3>
        <p>Широкий ассортимент и высокое качество наших сухих строительных смесей - лучший выбор для вас</p>
        <p><span class="footer-icon">📍</span> г. Алматы, ул. Спасская 90/1</p>
        <p><span class="footer-icon">📞</span> +7(702)718-26-14, +7(707)473-54-51</p>
        <p><span class="footer-icon">✉️</span> real-mix@mail.ru</p>
      </div>
      <div class="footer-column">
        <h3 class="footer-title">Ссылки</h3>
        <ul class="footer-links">
          <li><a href="#">Главная</a></li>
          <li><a href="#items">Товары</a></li>
          <li><a href="#about">О Нас</a></li>
          <li><a href="#shipping">Доставка</a></li>
          <li><a href="#address">Купить</a></li>
          <li><a href="#address">Контакты</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3 class="footer-title">Каталог</h3>
        <p>Вы можете получить электронную версию нашего каталога, если предоставите ваш e-mail.</p>
        <input class="email" type="email" placeholder="Ваш E-mail" />
        <button type="submit">Отправить</button>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 Realmix.kz Все права защищены. Разработано: <a href="https://wa.me/77758802756">dsoft.kz</a></p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterSection',
  }
</script>

<style scoped>
.footer {
  background-color: #2A2A2A; /* Dark background */
  color: #fff; /* White text */
  padding: 40px 0;
  font-family: Arial, sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap; /* Allow the container to wrap */
  justify-content: space-between;
  padding: 0 10%;
}

.footer-column {
  display: flex;
  flex-direction: column;
  max-width: 33%;
  flex-basis: 33%; /* Initially set to take up one-third of the width */
  margin-bottom: 20px; /* Add some space between columns when wrapped */
}

.footer-title {
  margin-bottom: 10px;
  color: #FFCD00; /* Yellow color for titles */
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li a {
  color: #fff;
  text-decoration: none;
}

.footer-links li a:hover {
  text-decoration: underline;
}

.footer-icon {
  margin-right: 5px;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #2E4053; /* Slightly lighter blue for the border */
  padding-top: 10px;
}

input[type="email"], button {
  width: 100%; /* Make input and button full width */
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
}

button {
  background-color: #FFCD00; /* Yellow background */
  color: #0D2137; /* Dark text */
  border: none;
}

button:hover {
  opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-column {
    max-width: 100%;
    flex-basis: 100%; /* Take the full width on smaller screens */
  }

  input[type="email"], button {
    max-width: 300px; /* Set a max-width for better appearance on small devices */
  }

  .footer-links {
    flex-wrap: wrap;
    display: flex;
  }
  .footer-links li {
    margin-right: 10px;
  }
}
</style>
