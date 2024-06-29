<template>
  <div
    :class="{ 'dark-mode': $q.dark.isActive, 'light-mode': !$q.dark.isActive }"
  >
    <div class="pricing pricing-area q-pt-xl q-pb-xl">
      <div class="container">
        <div class="use-case flex items-center justify-center q-pt-xl q-pb-lg">
          <button type="button" class="use-case-btn">What We Charge</button>
          <h1>Pricing Plans</h1>
          <p>
            Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
            borat.
            <br />
            Lörem ipsum prende bloggare jung far.
          </p>
        </div>
        <div class="select-btn flex items-center justify-center">
          <button
            type="button"
            :class="{
              'package-btn': true,
              'active-btn': selectedPlan === 'monthly',
            }"
            @click="selectPlan('monthly')"
          >
            Monthly
          </button>
          <button
            type="button"
            :class="{
              'package-btn': true,
              'active-btn': selectedPlan === 'yearly',
            }"
            @click="selectPlan('yearly')"
          >
            Yearly
          </button>
        </div>
        <div class="flex justify-center items-start q-pt-xl">
          <div
            :class="
              selectedPlan === 'monthly'
                ? 'activeTable pricing-table q-mr-lg'
                : ' pricing-table q-mr-lg'
            "
          >
            <h1>Starter</h1>
            <p>Lörem ipsum ultrartad högen. Esk hemiseren euron.</p>
            <div
              class="flex items-center q-py-sm"
              v-for="(item, index) in starter"
              :key="index"
            >
              <div
                :class="
                  item.class == 'closed'
                    ? 'icon closed flex items-center'
                    : 'icon flex items-center'
                "
              >
                <img :src="item.icon" alt="items" />
              </div>
              <p class="name">{{ item.name }}</p>
            </div>
            <h2 class="price">$9</h2>
            <h4 class="month">/month</h4>
            <div class="q-px-lg">
              <button type="button" class="price-button">
                Start Free Trial <img :src="arrowIcon2" alt="arrowIcon" />
              </button>
            </div>
          </div>
          <div
            :class="
              selectedPlan != 'monthly'
                ? 'activeTable pricing-table q-mr-lg'
                : ' pricing-table q-mr-lg'
            "
          >
            <h1>Premium</h1>
            <p>Lörem ipsum ultrartad högen. Esk hemiseren euron.</p>
            <div
              class="flex items-center q-py-sm"
              v-for="(item, index) in premium"
              :key="index"
            >
              <div
                :class="
                  item.class == 'closed'
                    ? 'icon closed flex items-center'
                    : 'icon flex items-center'
                "
              >
                <img :src="item.icon" alt="items" />
              </div>
              <p class="name">{{ item.name }}</p>
            </div>
            <h2 class="price">$79 <del>$158</del></h2>
            <h4 class="month">/month</h4>
            <div class="q-px-lg">
              <button type="button" class="price-btn2">
                Get started <img :src="arrowIcon" alt="arrowIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrowIcon from "assets/icons/arrow.svg";
import check from "assets/icons/check.svg";
import arrowIcon2 from "assets/light/icons/arrow.svg";
import close from "assets/icons/close.svg";
import "../css/Pricing.scss";
import { useQuasar } from "quasar";

export default {
  data() {
    return {
      arrowIcon,
      arrowIcon2,
      selectedPlan: "monthly", // Default to monthly plan
      starter: [
        { name: "Natwark Community", icon: check, class: "open" },
        { name: "Natwark Brand", icon: check, class: "open" },
        { name: "Unlimited emails", icon: check, class: "open" },
        { name: "Classroom", icon: check, class: "open" },
        { name: "Community", icon: check, class: "open" },
        { name: "1 Contest", icon: check, class: "open" },
        { name: "Custom Domain", icon: close, class: "closed" },
        { name: "Custom Brand", icon: close, class: "closed" },
        { name: "Advertising", icon: close, class: "closed" },
        { name: "Control Panel", icon: close, class: "closed" },
      ],
      premium: [
        { name: "Natwark Community", icon: check, class: "open" },
        { name: "Natwark Brand", icon: check, class: "open" },
        { name: "Unlimited emails", icon: check, class: "open" },
        { name: "Classroom", icon: check, class: "open" },
        { name: "Community", icon: check, class: "open" },
        { name: "1 Contest", icon: check, class: "open" },
        { name: "Custom Domain", icon: check, class: "open" },
        { name: "Custom Brand", icon: check, class: "open" },
        { name: "Advertising", icon: check, class: "open" },
        { name: "Control Panel", icon: check, class: "open" },
      ],
    };
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
  },
  setup() {
    const $q = useQuasar();
    return {
      $q,
    };
  },
};
</script>
