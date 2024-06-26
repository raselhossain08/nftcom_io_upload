<template>
  <div class="banner-area">
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
    <div class="communities">
      <div class="container">
        <div class="use-case flex items-center justify-center">
          <button type="button" class="use-case-btn">Use cases</button>
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
</template>

<script>
import shape1 from "assets/banner/shape1.png";
import shape2 from "assets/banner/shape2.png";
import shape3 from "assets/banner/shape3.png";
import arrowIcon from "assets/icons/arrow.svg";
export default {
  setup() {
    return {
      shape1,
      shape2,
      shape3,
      arrowIcon,
    };
  },
};
</script>
<style>
.banner-area {
  position: relative;
  height: 100%;
}
.gap {
  height: 80px;
  width: 100%;
}
.top-bar {
  position: relative;
  z-index: 444;
}
.top-bar {
  position: relative;
  z-index: 444;
}
.banner-button {
  position: relative;
  z-index: 444;
  padding: 20px 0;
}
.banner-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-content {
  padding: 0 50px;
}
.shape-1 {
  width: 100%;
  position: relative;
  z-index: 11;
}
.shape-2 {
  width: 100%;
  position: relative;
  z-index: 20;
}
.shape-3 {
  width: 100%;
  position: relative;
  z-index: 5;
  opacity: 0.5;
}
.top-bar h1 {
  padding: 30px 0;
  font-family: "Urbanist", sans-serif;
  font-size: 70px;
  font-weight: 600;
  line-height: 84px;
  text-align: center;
  color: #ffffff;
}
.top-bar p {
  font-family: "Inter", sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 41.75px;
  text-align: center;
  color: #eae8e8;
}
.start-btn {
  margin-right: 20px;
  background: linear-gradient(120.12deg, #fde9a3 -3.95%, #eecb4e 101.99%);
  width: 294.94px;
  height: 60px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Urbanist;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  cursor: pointer;
}
.explore-btn {
  cursor: pointer;
  margin-left: 20px;
  background: transparent;
  border: 1px solid #ffffff;
  width: 294.94px;
  height: 60px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Urbanist;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
}

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
</style>
