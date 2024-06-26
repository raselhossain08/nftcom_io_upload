<template>
  <div class="networking-area q-pt-lg">
    <div class="container">
      <div class="row">
        <div class="col-7">
          <div class="networking flex column justify-between">
            <div class="img-list flex items-center justify-between">
              <img :src="avatar1" alt="avatar1" />
              <img :src="avatar2" alt="avatar1" />
              <img :src="avatar3" alt="avatar1" />
              <img :src="avatar4" alt="avatar1" />
              <img :src="avatar5" alt="avatar1" />
              <img :src="avatar6" alt="avatar1" />
              <img :src="avatar7" alt="avatar1" />
              <img :src="avatar8" alt="avatar1" />
            </div>
            <div class="content">
              <h1>Networking</h1>
              <p>
                Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
                borat. Lörem ipsum prende bloggare jung far.
              </p>
            </div>
          </div>
        </div>
        <div class="col-5 q-pl-xl">
          <div class="networking flex column justify-between">
            <div class="content">
              <h1>Courses</h1>
              <p>
                Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
                borat. Lörem ipsum prende bloggare jung far.
              </p>
            </div>
            <img :src="courseShape1" alt="courseShape1" class="courseShape1" />
            <img :src="courseShape1" alt="courseShape1" class="courseShape2" />
            <h2 class="courseShapeTxt1">$46</h2>
            <h2 class="courseShapeTxt2">$46</h2>
          </div>
        </div>
      </div>
      <div class="row q-pt-xl">
        <div class="col-5">
          <div class="networking flex column justify-between items-end">
            <div class="content network2">
              <img
                :src="courseShape2"
                alt="courseShape2"
                class="courseShape3"
              />
              <img
                :src="courseShape2"
                alt="courseShape2"
                class="courseShape4"
              />
              <h1>Memberships</h1>
              <p>
                Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
                borat. Lörem ipsum prende bloggare jung far.
              </p>
            </div>
          </div>
        </div>
        <div class="col-7 q-pl-xl">
          <div class="networking flex column justify-between">
            <div class="content">
              <h1>Build a list</h1>
              <p>
                Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
                borat. Lörem ipsum prende bloggare jung far.
              </p>
            </div>
            <img :src="courseShape3" alt="" class="courseShape5" />
            <img :src="courseShape3" alt="" class="courseShape6" />
            <img :src="courseShape3" alt="" class="courseShape7" />
          </div>
        </div>
      </div>
      <div class="row q-pt-xl q-pb-xl">
        <div class="col-7">
          <div class="networking flex column justify-between networking7">
            <div class="flex justify-center items-center">
              <img :src="courseShape4" alt="courseShape4" class="" />
            </div>
            <div class="content">
              <h1>Private groups</h1>
              <p>
                Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
                borat. Lörem ipsum prende bloggare jung far.
              </p>
            </div>
          </div>
        </div>
        <div class="col-5 q-pl-xl">
          <div class="networking flex column justify-between last-items">
            <div class="content">
              <h1>Exclusive content</h1>
              <p>
                Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
                borat. Lörem ipsum prende bloggare jung far.
              </p>
            </div>
            <button
              type="button"
              class="flex items-center justify-center btn btn-message"
            >
              <img :src="message" alt="message" class="" /> Text & Messages
            </button>
            <button
              type="button"
              class="flex items-center justify-center btn btn-img"
            >
              <img :src="imgIcon" alt="message" /> Images and Gifs
            </button>
            <button
              type="button"
              class="flex items-center justify-center btn btn-videos"
            >
              <img :src="play" alt="message" /> Videos
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="effects1">
      <img :src="effect1" alt="effect1" />
    </div>
    <div class="container">
      <div class="flex justify-center items-center">
        <div class="mb-3 relative-position inline-block">
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
          />
          <button type="submit" class="submit-btn flex items-center">
            Request a Demo <img :src="arrow" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar1 from "assets/avatar/1.png";
import avatar2 from "assets/avatar/2.png";
import avatar3 from "assets/avatar/3.png";
import avatar4 from "assets/avatar/4.png";
import avatar5 from "assets/avatar/5.png";
import avatar6 from "assets/avatar/6.png";
import avatar7 from "assets/avatar/7.png";
import avatar8 from "assets/avatar/8.png";
import courseShape1 from "assets/course/shape1.png";
import courseShape2 from "assets/course/shape2.png";
import courseShape3 from "assets/course/shape3.png";
import courseShape4 from "assets/course/shape4.png";
import message from "assets/icons/message.svg";
import imgIcon from "assets/icons/imgIcon.svg";
import play from "assets/icons/play.svg";
import arrow from "assets/icons/arrow.svg";
import effect1 from "assets/effects/effect1.png";

export default {
  components: {},
  data() {
    return {
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6,
      avatar7,
      avatar8,
      courseShape1,
      courseShape2,
      courseShape3,
      courseShape4,
      message,
      imgIcon,
      play,
      effect1,
      arrow,
    };
  },
};
</script>

<style scoped>
.networking-area {
  position: relative;
  z-index: 444;
}
.networking {
  background: #1e1c1c;
  box-shadow: 0px 4px 100px 0px #0000000d;
  border-radius: 50px;
  height: 429px;
  padding: 50px 0;
  position: relative;
  overflow: hidden;
}
.img-list {
  width: 100%;
  overflow-x: hidden;
  flex-wrap: nowrap;
}
.img-list::-webkit-scrollbar {
  display: none;
}
.img-list img {
  width: 87px;
  height: 87px;
  display: block;
  margin-right: 15px;
}
.content {
  padding: 0 50px;
}
.content h1 {
  font-family: "Urbanist", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  text-align: left;
  color: #ffffff;
  padding-bottom: 10px;
}
.content p {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: left;
  color: #eae8e8;
  word-break: break-all;
}
.courseShape1 {
  position: absolute;
  bottom: 37px;
  left: -74px;
}
.courseShape2 {
  position: absolute;
  bottom: -70px;
  left: 25px;
}
.courseShapeTxt1 {
  position: absolute;
  font-family: Urbanist;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: #ffffff;
  left: 252px;
  bottom: 152px;
  transform: rotate(348deg);
}
.courseShapeTxt2 {
  position: absolute;
  font-family: Urbanist;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: #ffffff;
  left: 345px;
  bottom: 38px;
  transform: rotate(348deg);
}
.courseShape3 {
  position: absolute;
  top: -15px;
  left: 51px;
}
.courseShape4 {
  position: absolute;
  top: 10px;
  left: 10px;
}
.network2 {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}
.courseShape5 {
  position: absolute;
  bottom: -76px;
  left: 59px;
  width: 100%;
}
.courseShape6 {
  position: absolute;
  bottom: -95px;
  left: 85px;
  width: 100%;
}
.courseShape7 {
  position: absolute;
  bottom: -114px;
  left: 112px;
  width: 100%;
}
.networking7 {
  flex-direction: column;
  flex-wrap: nowrap;
}

.btn {
  padding: 10px 20px;
  font-family: Urbanist;
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #ffffff;
  box-shadow: 0px 4.48px 111.92px 0px #00000026;
  border: 1px solid #2b2828;
  background: #171717;
  border-radius: 55.96px;
  cursor: pointer;
}
.btn img {
  margin-right: 10px;
}
.btn-message {
  position: absolute;
  bottom: 147px;
  left: 38px;
  transform: rotate(350deg);
}
.btn-img {
  position: absolute;
  bottom: 105px;
  right: 20px;
  transform: rotate(343deg);
}
.btn-videos {
  position: absolute;
  bottom: 22px;
  left: 54px;
  transform: rotate(37deg);
}

.effects1 {
  position: absolute;
  right: 0;
  bottom: -192px;
}
.last-items {
  z-index: 11;
}
.form-control {
  width: 563px;
  height: 82px;
  padding: 15px 16px 15px 30px;
  border-radius: 50px;
  border: 1px solid #2b2828;
  background: #1e1c1c;
}
.submit-btn {
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
  position: absolute;
  right: 5px;
  top: 0;
  transform: translateY(25%);
}
.submit-btn img {
  margin-left: 10px;
}
</style>
