<template>
  <div
    :class="{ 'dark-mode': $q.dark.isActive, 'light-mode': !$q.dark.isActive }"
  >
    <div class="banner-area" id="home">
      <div class="gap"></div>
      <div class="container">
        <div class="top-bar">
          <h1>
            Launch and own your <br />
            private community.
          </h1>
          <p>
            Bring people together and engage with <br />
            your audience like never before.
          </p>
        </div>
        <div class="flex justify-center items-center banner-button">
          <button
            type="button"
            class="start-btn flex items-center justify-center"
          >
            Start a community
            <img :src="arrowIcon" alt="" style="margin-left: 10px" />
          </button>
          <button type="button" class="explore-btn">Explore communities</button>
        </div>
      </div>

      <div class="banner-effect">
        <img :src="shape1" alt="" class="shape-1" />
      </div>

      <div class="banner-content">
        <img :src="shape2" alt="" class="shape-2" />
      </div>
      <div class="banner-effect">
        <img :src="shape3" alt="" class="shape-3" />
      </div>
      <div class="banner-effect">
        <img v-if="$q.dark.isActive" :src="shape5" alt="" class="shape-4" />
        <img v-else :src="shape4" alt="" class="shape-4" />
      </div>
      <div class="communities">
        <div class="container">
          <div class="banner-feature flex items-center justify-center">
            <button type="button" class="banner-feature-btn">Use cases</button>
            <h1>Communities use Natwark for</h1>
            <p>
              Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
              borat. <br />
              Lörem ipsum prende bloggare jung far.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shape1 from "assets/banner/shape1.png";
import shape2 from "assets/banner/shape2.png";
import shape3 from "assets/banner/shape3.png";
import shape4 from "../assets/effects/bannerEffect2.png";
import shape5 from "../assets/effects/darkRound.png";
import arrowIcon from "assets/icons/arrow.svg";
import "../css/Banner.scss";
import { useQuasar } from "quasar";
const $q = useQuasar();
export default {
  setup() {
    return {
      shape1,
      shape2,
      shape3,
      arrowIcon,
      shape4,
      shape5,
    };
  },
};
</script>
