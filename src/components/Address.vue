<template>
  <section id="address">
    <div class="address-section">
      <div class="yandex-map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A67a773f922eb4cdef1d4f7c2196a8a41a34eb806d7c9a663067f8b5d1265dd0b&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
      </div>
      <div class="contact-information">
        <h2 class="contact-title">Наши контакты</h2>
        <p><strong>Адрес:</strong> Казахстан, г. Алматы, ул. Спасская 90/1</p>
        <p><strong>Телефон:</strong> +7707 473 54 51</p>
        <p><strong>Почта:</strong> real-mix@mail.ru</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AddressSection'
  // Add your component logic here if needed
}
</script>

<style>
.address-section {
  display: flex;
  flex-direction: row; /* Keep the row direction for larger screens */
  justify-content: stretch; /* Stretch children to fill the horizontal space */
  align-items: stretch; /* Ensure children fill the available vertical space */
}

.yandex-map {
  flex-basis: 50%; /* Take up half the width */
  /* Ensure the map is on the left */
}

.contact-information {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-basis: 50%; /* Take up the remaining half */
  background-color: #0D2137;
  color: #FFFFFF;
  box-sizing: border-box; /* Include padding in the width calculation */
  background-image: url('../assets/lines-1.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.contact-information p {
  margin: 10px 0;
  font-size: 1.2rem;
}

.contact-title {
  margin-bottom: 20px;
  font-size: 2.5rem;
}

@media (max-width: 768px) {
  .address-section {
    flex-direction: column;
  }

  .contact-information,
  .yandex-map {
    flex-basis: 100%; /* Full width on smaller screens */
  }

  .yandex-map iframe {
    height: 300px; /* Adjust map height on smaller screens */
  }

  /* Ensure the map appears above the text on smaller screens */
  .yandex-map {
    order: 2;
  }

  .contact-information {
    order: 1;
  }
}
</style>
