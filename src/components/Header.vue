<template>
  <header :class="{ 'header-hidden': !isHeaderVisible }">
    <div class="header-top py-2 text-light" style="background-color: rgb(0, 0, 85);">
      <div class="container d-flex justify-content-end">
        <div class="address">
          <span class="icon-circle">
            <font-awesome-icon icon="map-marker-alt" style="color: #FFD631"/>
          </span>
          <a href="https://shorturl.at/wQT18" class="address-text">г. Алматы, ул. Спасская 90/1</a>
        </div>
        <div class="email">
          <span class="icon-circle">
            <font-awesome-icon icon="envelope" style="color: #FFD631"/>
          </span>
          <a href="mailto:real-mix@mail.ru" class="email-text">real-mix@mail.ru</a>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="logo d-flex align-items-center">
          <img src="@/assets/logo.svg" alt="Logo" class="logo-img">
          <a href="#" class="logo-text">Realmix.kz</a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Главная</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#items">Товары</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">О нас</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#shipping">Доставка</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#address">Где купить</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#address">Контакты</a>
            </li>
          </ul>
          <div class="phone-numbers d-none d-lg-block">
            <div><a href="tel:+77074735451">+7 707 473-54-51</a></div>
            <div><a href="tel:+77073074127">+7 707 307-41-27</a></div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      lastScrollPosition: 0,
      isHeaderVisible: true,
    };
  },
  mounted() {
    // Use a more specific method name to avoid conflicts
    window.addEventListener('scroll', this.onWindowScroll, { passive: true });
  },
  unmounted() {
    window.removeEventListener('scroll', this.onWindowScroll);
  },
  methods: {
    onWindowScroll() {
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Hide the header only when the user scrolls down more than 50px
      if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 50) {
        this.isHeaderVisible = false;
      } else {
        this.isHeaderVisible = true;
      }

      // Update the last scroll position to the current one
      this.lastScrollPosition = currentScrollPosition;
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 12000;
  transition: transform 0.3s ease-in-out;
  will-change: transform; /* Optimize for animations */
}

.header-hidden {
  transform: translateY(-100%); /* Adjust the value if your header's size is different */
}

.container {
  max-width: 1200px;
}
.logo {
  display: flex;
  align-items: center;
}

@keyframes rotateAndPauseLogo {
  0%, 100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(360deg);
  }
}

.logo-img {
  max-height: 70px;
  animation: rotateAndPauseLogo 15s infinite;
}

.logo-text {
  font-weight: bold; /* Make text bold */
  font-size: 2rem; /* Increase text size */
  margin-left: 20px; /* Space between logo and text */
  line-height: 1.2;
  color: #63ab24;
  text-decoration: none;
}
.logo-text:hover {
  color: #000657;
}
.icon-circle {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #FFD631;
  border-radius: 50%;
  color: #FFD631;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.icon-circle:hover {
  transform: scale(1.2); /* Icon grows larger when hovered */
  border-color: #ffffff; /* Border color changes on hover */
}
.email {
  margin: 0px 0px 0px 20px;
}
.address, .email {
  display: flex;
  align-items: center;
}
.email a, .address a {
  margin: 0px 0px 0px 10px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}
.phone-numbers {
  margin-left: 60px;
}
.phone-numbers a {
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  color: #000000;
  transition: color 0.3s ease;
}
.phone-numbers a:hover {
  color: #63ab24; /* Changes color on hover to match theme */
}

.nav-link {
  font-weight: 600;
}
.nav-link:hover {
  border-radius: 7px;
  background-color: #FFD631;
  color: #000000;
  transition: background-color 0.3s ease, color 0.3s ease, border-radius 0.3s ease;
}

.navbar-toggler {
  border-color: #63ab24;
  border-width: 3px;
}

.dropdown-menu {
  background-color: #f8f9fa; /* Light background, adjust as needed */
  border: 1px solid #FFD631; /* Yellow border for dropdown */
}

@media (max-width: 969px) {
  .phone-numbers {
    display: block !important;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .phone-numbers {
    display: block !important;
    margin: 0;
  }
  .nav-item {
    padding: 10px 0px;
    border: 1px solid #e8e8e8
  }
  .nav-item:hover {
    background-color: #FFD631;
  }
  .navbar-nav {
    margin-top: 20px;
  }
  .phone-numbers {
    margin-top: 20px;
  }
  .phone-numbers div a {
    font-size: 2rem;
  }
  .nav-link {
    font-size: 1.3rem;
    margin-left: 10px;
  }
  .address-text, .email-text {
    font-size: 16px;
  }
}
</style>
