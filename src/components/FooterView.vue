<template>
  <div
    :class="{ 'dark-mode': $q.dark.isActive, 'light-mode': !$q.dark.isActive }"
  >
    <div class="relative-position footer">
      <div class="container">
        <div class="divider"></div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="footer-1 q-pr-xl">
              <img :src="$q.dark.isActive ? logo : darkLogo" alt="" />
              <p>
                Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
                borat. Lörem ipsum prende bloggare jung far.
              </p>
              <div class="contact flex items-center">
                <div class="icon-box">
                  <img :src="sms" alt="sms" />
                </div>
                <h4 class="q-pl-md">support@natwark.com</h4>
              </div>
              <div class="contact flex items-center">
                <div class="icon-box">
                  <img :src="phone" alt="phone" />
                </div>
                <h4 class="q-pl-md">121211111</h4>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-2">
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
          <div class="col-12 col-sm-6 col-md-2">
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
          <div class="col-12 col-sm-6 col-md-4 q-pl-xl footer-4">
            <div class="subscribe">
              <h3 class="title">Company</h3>
              <div class="mb-3 relative-position">
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Email address "
                />
                <div class="flex items-center full-height submit-box">
                  <button type="button" class="submit-btn">Submit</button>
                </div>
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
import darkLogo from "assets/darkLogo.svg";
import { useQuasar } from "quasar";
const $q = useQuasar();
import "../css/Footer.scss";
export default {
  data() {
    return {
      logo,
      effect1,
      effect2,
      sms,
      darkLogo,
      phone,
      instagram,
      facebook,
      twitter,
      linkedin,
    };
  },
};
</script>
