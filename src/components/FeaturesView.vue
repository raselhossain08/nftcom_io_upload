<template>
  <div>
    <div class="features q-pt-xl">
      <div class="container">
        <div class="use-case flex items-center justify-center q-pt-xl">
          <button type="button" class="use-case-btn">Features</button>
          <h1>Manage a strong community</h1>
          <p>
            Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. <br>  Lörem ipsum prende bloggare jung far.
          </p>
        </div>
        <div class=" q-py-xl">
          <div class="row justify-center">
            <div v-for="(feature, index) in features" :key="index" class="col-3 q-px-md q-py-lg">
                <div class="feature-box" v-if="feature.fullPic!==true">
                  <div class="feature-box-img">
                    <img :src="feature.img" alt="">
                    <h1>{{ feature.title }}</h1>
                    <p>{{ feature.description }}</p>
                  </div>
                </div>
                <div class="feature-box" v-if="feature.fullPic===true" style="padding:0">
                  <div class="feature-box-img ">
                    <img :src="feature.img" alt="">
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

export default {
  components: {},
  data() {
    return {
      features: [
        {
          img: feature1,
          title: "Monetization",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature2,
          title: "Community",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature3,
          title: "Classroom",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature4,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature5,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature6,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature7,
          fullPic:true
        },
        {
          img: feature8,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature9,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature10,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature11,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature12,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature13,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature14,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
        {
          img: feature15,
          title: "Gamification",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far."
        },
      ]
    };
  }
};
</script>

<style>
.use-case {
  flex-direction: column;
}
.use-case button {
  position: relative;
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: center;
  padding: 12px 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120.12deg, #fde9a3 -3.95%, #eecb4e 101.99%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 2em; /* Adjust as needed */
  font-weight: bold; /* Adjust as needed */

  z-index: 11;
}
.use-case button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120.12deg,
    rgba(253, 233, 163, 0.1) -3.95%,
    rgba(238, 203, 78, 0.1) 101.99%
  );
  border-radius: 50px;
}
.use-case h1 {
  font-family: "Urbanist", sans-serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  padding: 20px 0;
}
.use-case p {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: center;
  color: #ffffff;
}
.feature-box{
  background: linear-gradient(180deg, #262323 0%, #181716 100%);
  border-radius: 25px;
  padding: 30px;
}
.feature-box h1{
  padding: 15px 0;
  font-family: "Urbanist",sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
  color: #FFFFFF;
}
.feature-box p{
  font-family: "Inter",sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: left;
  color: #FFFFFF;
  word-break: break-all;
}
</style>
