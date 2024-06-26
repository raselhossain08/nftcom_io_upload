<template>
  <div class="contact-area q-py-xl">
    <div class="container q-py-xl">
      <div class="contact-form relative-position">
        <div class="row full-height">
          <div class="col-6 full-height left-side">
            <div class="flex items-center relative-position">
              <img :src="desktop" alt="desktop" class="desktop-pic" />
              <img :src="mobile" alt="mobile" class="mobile-pic" />
            </div>
            <div class="flex justify-end column full-height left-content">
              <h1>Request a demo</h1>
              <p>
                Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
                borat.
              </p>
            </div>
          </div>
          <div class="col-6">
            <div class="right-side">
              <h1>Fill the form Below</h1>
              <p>
                Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
                borat.
              </p>
              <form>
                <div class="q-mb-lg">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Business or community name"
                  />
                </div>
                <div class="q-mb-lg">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Email address "
                  />
                </div>
                <div class="q-mb-lg relative-position">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id="phone"
                    aria-describedby="helpId"
                    placeholder="Phone Number"
                  />
                  <button
                    type="button"
                    class="mobile-select-button flex items-center"
                  >
                    <img :src="flag" alt="flag" class="q-mr-sm" /> +1
                    <i class="fa-solid fa-angle-down q-ml-sm"></i>
                  </button>
                </div>
                <div class="q-mb-lg">
                  <textarea
                    class="form-control"
                    name=""
                    id=""
                    rows="3"
                    placeholder="Optional message (message)"
                  ></textarea>
                </div>
                <div class="full-width flex justify-end">
                  <button type="button" class="price-btn2">
                    Request demo <img :src="arrowIcon" alt="arrowIcon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="effects absolute-position top">
          <img :src="effect2" alt="effect2" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import effect2 from "assets/effects/effect2.png";
import desktop from "assets/contact/desktop.png";
import mobile from "assets/contact/mobile.png";
import arrowIcon from "assets/icons/arrow.svg";
import flag from "assets/contact/flag.png";
export default {
  data() {
    return {
      effect2,
      desktop,
      mobile,
      flag,
      arrowIcon,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.contact-form {
  width: 100%;
  height: 850px;
  border-radius: 50px;
  background: #1e1c1c;
  overflow: hidden;
}
.desktop-pic {
  position: absolute;
  z-index: 1;
  top: 18px;
  left: -108px;
}
.mobile-pic {
  position: absolute;
  top: 83px;
  left: 301px;
  z-index: 1;
}
.left-side {
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 100px;
}
.effects {
  top: 0;
  position: absolute;
}
.left-content h1 {
  font-family: "Urbanist", sans-serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 60px;
  text-align: left;
  color: #ffffff;
}
.left-content p {
  font-family: "Inter", sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 41.75px;
  text-align: left;
  word-break: break-all;
  color: #eae8e8;
}
.right-side {
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 100px;
  padding-right: 100px;
}
.right-side h1 {
  font-family: "Urbanist", sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
  padding-bottom: 15px;
  color: #ffffff;
}
.right-side p {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: left;
  color: #eae8e8;
}
.right-side input {
  background: #171616;
  box-shadow: 0px 4px 100px 0px #0000000d;
  width: 100%;
  height: 60px;
  padding: 15px 16px 15px 30px;
  border-radius: 50px;
  border: none;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  text-align: left;
  color: #868383;
}
.contact-area .form-control {
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  text-align: left;
  color: #868383;
}
.contact-area .form-control::placeholder {
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  text-align: left;
  color: #868383;
}
.mobile-select-button {
  position: absolute;
  left: 0;
  top: 0;
  background: transparent;
  padding: 0 20px;
  height: 100%;
  color: #fff;
  cursor: pointer;
}
#phone {
  padding-left: 106px;
}
textarea {
  height: 241px;
  box-shadow: 0px 4px 100px 0px #0000000d;
  background: #171616;
  width: 100%;
  border: none;
  padding: 20px;
  border-radius: 20px;
}
</style>
