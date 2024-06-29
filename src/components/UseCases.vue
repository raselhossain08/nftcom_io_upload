<template>
  <div
    :class="{ 'dark-mode': $q.dark.isActive, 'light-mode': !$q.dark.isActive }"
  >
    <div class="networking-area q-pt-lg" id="useCase">
      <div class="container">
        <div class="row z-index">
          <div class="col-12 col-md-7 q-pb-lg q-pb-md-none">
            <div class="networking flex column justify-between network">
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
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat. Lörem ipsum prende bloggare jung far.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 course">
            <div class="networking flex column justify-between">
              <div class="content">
                <h1>Courses</h1>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat. Lörem ipsum prende bloggare jung far.
                </p>
              </div>
              <img
                :src="$q.dark.isActive ? courseShape1 : whiteShape1"
                alt=""
                class="courseShape1"
              />
              <img
                :src="$q.dark.isActive ? courseShape1 : whiteShape1"
                alt="courseShape1"
                class="courseShape2"
              />
            </div>
          </div>
        </div>
        <div class="row q-pt-xl z-index">
          <div class="col-12 col-md-5 q-pb-lg q-pb-md-none memberships">
            <div class="networking flex column justify-between items-end">
              <div class="content network2">
                <img
                  :src="$q.dark.isActive ? courseShape2 : whiteShape2"
                  alt=""
                  class="courseShape3"
                />
                <img
                  :src="$q.dark.isActive ? courseShape3 : whiteShape3"
                  alt=""
                  class="courseShape4"
                />
                <h1>Memberships</h1>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat. Lörem ipsum prende bloggare jung far.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-md-7 q-pb-lg q-pb-md-none q-pl-sm-xl build-list"
          >
            <div class="networking flex column justify-between">
              <div class="content">
                <h1>Build a list</h1>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat. Lörem ipsum prende bloggare jung far.
                </p>
              </div>
              <div class="flex justify-center full-width">
                <img
                  :src="$q.dark.isActive ? courseShape4 : whiteShape4"
                  alt=""
                  class="courseShape5"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row q-pt-md-xl q-pb-lg q-pb-md-xl z-index private-row">
          <div class="col-12 col-md-7 q-pb-lg q-pb-md-none private-group">
            <div class="networking flex column justify-between networking7">
              <div class="flex justify-center items-center">
                <img
                  :src="$q.dark.isActive ? courseShape5 : whiteShape5"
                  alt=""
                />
              </div>
              <div class="content">
                <h1>Private groups</h1>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat. Lörem ipsum prende bloggare jung far.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 q-pl-md-xl exclusive">
            <div class="networking flex column justify-between last-items">
              <div class="content">
                <h1>Exclusive content</h1>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat. Lörem ipsum prende bloggare jung far.
                </p>
              </div>
              <button
                type="button"
                class="flex items-center justify-center btn btn-message"
              >
                <img
                  :src="$q.dark.isActive ? message : lightMessage"
                  class=""
                />
                Text & Messages
              </button>
              <button
                type="button"
                class="flex items-center justify-center btn btn-img"
              >
                <img :src="$q.dark.isActive ? imgIcon : lightImage" class="" />
                Images and Gifs
              </button>
              <button
                type="button"
                class="flex items-center justify-center btn btn-videos"
              >
                <img :src="$q.dark.isActive ? play : lightVideo" class="" />
                Videos
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="effects1">
        <img :src="effect1" alt="effect1" />
      </div>
      <div class="effect2">
        <img :src="effect2" alt="effect1" />
      </div>
      <div class="container submit-input">
        <div class="flex justify-center items-center">
          <div class="relative-position inline-block">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Email address "
            />
            <div
              class="submit-box flex items-center justify-center full-height"
            >
              <button type="submit" class="submit-btn flex items-center">
                Request a Demo <img :src="arrow" alt="arrow" />
              </button>
            </div>
          </div>
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
import courseShape5 from "assets/course/shape5.png";
import whiteShape1 from "assets/course/whiteShape1.png";
import whiteShape2 from "assets/course/whiteShape2.png";
import whiteShape3 from "assets/course/whiteShape3.png";
import whiteShape4 from "../assets/course/whShape4.png";
import whiteShape5 from "assets/course/whiteShape5.png";
import lightMessage from "assets/light/icons/chat.svg";
import lightImage from "assets/light/icons/image.svg";
import lightVideo from "assets/light/icons/video.svg";
import message from "assets/icons/message.svg";
import imgIcon from "assets/icons/imgIcon.svg";
import play from "assets/icons/play.svg";
import arrow from "assets/icons/arrow.svg";
import effect1 from "assets/effects/effect1.png";
import effect2 from "assets/effects/featureEffects.png";
import "../css/Networking.scss";
import { useQuasar } from "quasar";
const $q = useQuasar();
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
      courseShape5,
      whiteShape1,
      whiteShape2,
      whiteShape3,
      whiteShape4,
      whiteShape5,
      message,
      imgIcon,
      play,
      effect1,
      effect2,
      arrow,
      lightVideo,
      lightImage,
      lightMessage,
    };
  },
};
</script>
