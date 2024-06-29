<template>
  <div
    :class="{ 'dark-mode': $q.dark.isActive, 'light-mode': !$q.dark.isActive }"
  >
    <button type="button" @click="toggleDarkMode" class="nd">
      <img :src="$q.dark.isActive ? light : night" alt="" class="shape-4" />
    </button>
    <HeaderView />
    <section id="banner">
      <BannerView />
    </section>
    <section id="useCase">
      <UseCases />
    </section>
    <section id="features">
      <FeaturesView />
    </section>
    <section id="pricing">
      <PricingView />
    </section>
    <section id="contact">
      <ContactView />
    </section>
    <section id="blog">
      <BlogView />
    </section>
    <FooterView />
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";

import HeaderView from "components/HeaderView.vue";
import BannerView from "components/BannerView.vue";
import UseCases from "components/UseCases.vue";
import FeaturesView from "components/FeaturesView.vue";
import PricingView from "components/PricingView.vue";
import ContactView from "components/ContactView.vue";
import BlogView from "components/BlogView.vue";
import FooterView from "components/FooterView.vue";
import light from "assets/sun.png";
import night from "assets/moon.png";
const $q = useQuasar();

const toggleDarkMode = () => {
  $q.dark.toggle();
};

// Example: Automatically set dark mode based on a condition
// if (someCondition) {
//   setDarkMode(true) // or false or "auto"
// }
</script>

<style scoped>
.light-mode {
  background-color: var(
    --white-color
  ); /* Define your light mode background color */
}

.dark-mode {
  background-color: #171616; /* Define your dark mode background color */
}
.nd {
  z-index: 4444444;
  position: relative;
}
.dark-mode .nd {
  background: #4c5b8a;
}
.light-mode .nd {
  background-color: #171616;
}
.nd {
  position: fixed !important;
  top: 20%;
  right: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
}
.nd img {
  width: 24px;
}
.sjjs {
  position: absolute;
  z-index: 8888;
}
</style>
