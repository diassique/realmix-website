<template>
  <HeaderComponent />
  <HeroSection />
  <ItemsSection />
  <AboutSection />
  <WhyUsSection />
  <ShippingSection />
  <RealmixSection />
  <CalculatorSection />
  <BenefitsSection />
  <TestimonialsSection />
  <AddressSection />
  <FooterSection />
  <div class="phone-widget">
    <a href="tel:+77074735451">
      <div class="phone-icon"></div>
    </a>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import HeroSection from './components/Hero.vue'
import ItemsSection from './components/ItemsSection.vue'
import AboutSection from './components/About.vue'
import WhyUsSection from './components/WhyUs.vue'
import ShippingSection from './components/Shipping.vue'
import RealmixSection from './components/Realmix.vue'
import CalculatorSection from './components/Calculator.vue'
import BenefitsSection from './components/Benefits.vue'
import TestimonialsSection from './components/Testimonials.vue'
import AddressSection from './components/Address.vue'
import FooterSection from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    ItemsSection,
    AboutSection,
    WhyUsSection,
    ShippingSection,
    RealmixSection,
    CalculatorSection,
    BenefitsSection,
    TestimonialsSection,
    AddressSection,
    FooterSection
  }
}
</script>

<style>
#app {
  font-family: 'Gilroy', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
