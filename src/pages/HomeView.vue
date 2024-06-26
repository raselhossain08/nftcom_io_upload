<template>
  <div class="bg">
    <HeaderView />
    <BannerView />
    <UseCases />
    <FeaturesView />
    <PricingView />
    <ContactView />
    <BlogView />
    <FooterView />
  </div>
</template>

<script setup>
import HeaderView from "components/HeaderView.vue";
import BannerView from "components/BannerView.vue";
import UseCases from "components/UseCases.vue";
import FeaturesView from "components/FeaturesView.vue";
import PricingView from "components/PricingView.vue";
import ContactView from "components/ContactView.vue";
import BlogView from "components/BlogView.vue";
import FooterView from "components/FooterView.vue";
</script>

<style scoped>
.bg {
  background-color: #171616;
}
</style>
