<template>
  <div
    :class="{ 'dark-mode': $q.dark.isActive, 'light-mode': !$q.dark.isActive }"
  >
    <div class="features feature-area q-pt-xl">
      <div class="container">
        <div class="use-case flex items-center justify-center q-pt-xl">
          <button type="button" class="use-case-btn">Features</button>
          <h1>Manage a strong community</h1>
          <p>
            Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
            borat. <br />
            Lörem ipsum prende bloggare jung far.
          </p>
        </div>
        <div class="q-py-xl">
          <div class="row justify-center">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="col-3 q-px-md q-py-lg custom-col"
            >
              <div class="feature-box" v-if="feature.fullPic !== true">
                <div class="feature-box-img">
                  <img :src="feature.img" alt="" />
                  <h1>{{ feature.title }}</h1>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
              <div
                class="feature-box"
                v-if="feature.fullPic === true"
                style="padding: 0"
              >
                <div class="feature-box-img">
                  <img :src="feature.img" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feature1 from "assets/feature/1.png";
import feature2 from "assets/feature/2.png";
import feature3 from "assets/feature/3.png";
import feature4 from "assets/feature/4.png";
import feature5 from "assets/feature/5.png";
import feature6 from "assets/feature/6.png";
import feature7 from "assets/feature/7.png";
import feature8 from "assets/feature/8.png";
import feature9 from "assets/feature/9.png";
import feature10 from "assets/feature/10.png";
import feature11 from "assets/feature/11.png";
import feature12 from "assets/feature/12.png";
import feature13 from "assets/feature/13.png";
import feature14 from "assets/feature/14.png";
import feature15 from "assets/feature/15.png";
import "../css/Features.scss";
import { useQuasar } from "quasar";
const $q = useQuasar();
export default {
  components: {},
  data() {
    return {
      features: [
        {
          img: feature1,
          title: "Monetization",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature2,
          title: "Community",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature3,
          title: "Classroom",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature4,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature5,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature6,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature7,
          fullPic: true,
        },
        {
          img: feature8,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature9,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature10,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature11,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature12,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature13,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature14,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
        {
          img: feature15,
          title: "Gamification",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
        },
      ],
    };
  },
};
</script>
