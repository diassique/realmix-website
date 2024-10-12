<template>
  <section id="about">
    <div class="about-section" style="background-color: #F8F8F8;">
      <div class="container">
        <h2 class="section-title">О компании Real Mix Stroy</h2>
        <div class="about-content">
          <img class="about-image" src="@/assets/about-1.jpg" alt="About Image 1">
          <p class="about-text">
            Встречайте <strong>"REAL MIX STROY COMPANY"</strong> – вашего надежного партнера в мире строительства, где качество встречается с инновациями, чтобы создать идеальное решение для каждого проекта. Основанная в 2010 году, наша компания выросла в одного из ведущих казахстанских производителей сухих строительных смесей, предлагая более 15 наименований продукции, которая не просто соответствует стандартам, но и переопределяет их.
            <br><br>
            Мы гордимся тем, что предоставляем продукцию, созданную с использованием высококачественного сырья и эксклюзивных химических добавок немецкого качества, что обеспечивает непревзойденную адгезию, прочность и удобство в использовании. Наша производственная мощность более 250 тонн готовой продукции в день – это гарантия того, что мы можем удовлетворить спрос любого масштаба, от Алматы до Уральска, подтверждая нашу приверженность качеству и инновациям.
          </p>
        </div>
  
        <h3 class="about-subtitle">Безупречная репутация на рынке</h3>
        <p class="about-text">
          За годы работы на рынке, <strong>"Real Mix"</strong> заслужила репутацию надежного поставщика, чьи продукты – шпатлевки, штукатурки, наливные полы, клеи и многое другое – стали символом высочайшего качества. Каждый продукт в нашем ассортименте разработан с учетом потребностей профессионалов и любителей, делая строительство более простым, быстрым и эффективным.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.about-section {
  padding: 30px 0;
}

.section-title {
  font-size: 2.5rem;
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

.about-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;
}

.about-image {
  max-width: 300px; /* Reduced from 100% to 300px */
  height: auto;
  margin-right: 20px;
  border-radius: 20px;
  object-fit: cover;
}

.about-text {
  text-align: left;
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

.about-subtitle {
  font-size: 1.5rem;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
  .about-image {
    max-width: 100%; /* Full width on mobile */
    margin-bottom: 20px;
  }
  .about-text {
    margin-top: 0;
  }
}
</style>