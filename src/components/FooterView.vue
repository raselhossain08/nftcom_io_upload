<template>
  <div class="relative-position footer">
    <div class="container">
      <div class="divider"></div>
      <div class="row">
        <div class="col-4">
          <div class="footer-1 q-pr-xl">
            <img :src="logo" alt="logo" />
            <p>
              Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
              borat. Lörem ipsum prende bloggare jung far.
            </p>
            <div class="contact flex items-center">
              <div class="icon-box">
                <img :src="sms" alt="sms" />
              </div>
              <h4 class="q-pl-lg">support@natwark.com</h4>
            </div>
            <div class="contact flex items-center">
              <div class="icon-box">
                <img :src="phone" alt="phone" />
              </div>
              <h4 class="q-pl-lg">121211111</h4>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="links">
            <h3 class="title">Quick Links</h3>
            <ul>
              <li><a href="">Products</a></li>
              <li><a href="">How it works?</a></li>
              <li><a href="">Bulk Discounts</a></li>
              <li><a href="">Affiliate Program</a></li>
            </ul>
          </div>
        </div>
        <div class="col-2">
          <div class="company">
            <h3 class="title">Company</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Terms And Conditions</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="col-4 q-pl-xl">
          <div class="subscribe">
            <h3 class="title">Company</h3>
            <div class="mb-3 relative-position">
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              />
              <button type="button" class="submit-btn">Submit</button>
            </div>

            <div class="social flex items-center q-py-lg">
              <div class="icon-box">
                <a href="">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div class="icon-box q-ml-lg">
                <a href="">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div class="icon-box q-ml-lg">
                <a href="">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div class="icon-box q-ml-lg">
                <a href="">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="credit">
              <p>© Natwork 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="effects1">
      <img :src="effect1" alt="effect1" />
    </div>
    <div class="effects2">
      <img :src="effect2" alt="effect2" />
    </div>
  </div>
</template>

<script>
import logo from "assets/logo.svg";
import sms from "assets/icons/sms.svg";
import phone from "assets/icons/phone.svg";
import instagram from "assets/icons/instagram.svg";
import facebook from "assets/icons/facebook.svg";
import twitter from "assets/icons/twitter.svg";
import linkedin from "assets/icons/linkedin.svg";
import effect1 from "assets/effects/footer.png";
import effect2 from "assets/effects/footer2.png";

export default {
  data() {
    return {
      logo,
      effect1,
      effect2,
      sms,
      phone,
      instagram,
      facebook,
      twitter,
      linkedin,
    };
  },
};
</script>

<style>
.footer {
  padding-bottom: 100px;
}
.divider {
  width: 100%;
  height: 1px;
  background: #ffffff0d;
  margin: 80px 0;
}
.icon-box {
  background: #1e1c1c;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.subscribe a {
  font-size: 18px;
  color: #fff;
}
.credit p {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: left;
  color: #d1d1d1;
}
.submit-btn {
  margin-right: 20px;
  background: linear-gradient(120.12deg, #fde9a3 -3.95%, #eecb4e 101.99%);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Urbanist;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  cursor: pointer;
  position: absolute;
  right: -12px;
  top: 2px;
  padding: 8px 20px;
}
input {
  background: #1e1c1c;
  box-shadow: 0px 4px 100px 0px #0000000d;
  width: 100%;
  height: 50px;
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
.footer-1 p {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: left;
  color: #d1d1d1;
  padding-top: 10px;
}
.footer-1 h4 {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: left;
  color: #d1d1d1;
}
.title {
  font-family: "Urbanist", sans-serif;
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #ffffff;
  padding-bottom: 15px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 5px 0;
}
li a {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: left;
  color: #d1d1d1;
  text-decoration: none;
}
.effects1 {
  position: absolute;
  top: 0;
  left: 0;
}
.effects2 {
  position: absolute;
  top: -20px;
  right: 0;
}
.effects1 img {
  height: 400px;
}
</style>
