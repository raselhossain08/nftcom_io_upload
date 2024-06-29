<template>
  <div
    :class="{ 'dark-mode': $q.dark.isActive, 'light-mode': !$q.dark.isActive }"
  >
    <div class="contact-area q-py-xl">
      <div class="container q-py-xl">
        <div class="contact-form relative-position">
          <div class="row full-height contact-row">
            <div class="col-12 col-md-6 full-height left-side">
              <div class="flex items-center relative-position">
                <img :src="desktop" alt="desktop" class="desktop-pic" />
                <img :src="mobile" alt="mobile" class="mobile-pic" />
              </div>
              <div class="flex justify-end column full-height left-content">
                <h1>Request a demo</h1>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat.
                </p>
              </div>
              <img :src="contact" alt="mobile" class="contact-pic" />
            </div>
            <div class="col-12 col-md-6">
              <div class="right-side relative-position">
                <h1>Fill the form Below</h1>
                <p>
                  Lörem ipsum prende bloggare jung far. Salig. Reatuna
                  speluskap, borat.
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
                      @click="toggleDropdown()"
                    >
                      <img
                        :src="currentCountries.flag"
                        alt="flag"
                        class="q-mr-sm flag"
                      />
                      {{ currentCountries.number }}
                      <i class="fa-solid fa-angle-down q-ml-sm"></i>
                    </button>
                    <div class="dropDown-flag" v-if="dropDown">
                      <div v-for="(country, index) in countries" :key="index">
                        <button
                          type="button"
                          class="dropDown-btn flex items-center"
                          @click="updateCurrentCountry(country)"
                        >
                          <img
                            :src="country.flagUrl"
                            :alt="`${country.name} flag`"
                          />
                          {{ country.name }}
                          {{ country.number }}
                        </button>
                      </div>
                    </div>
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
                  <div class="full-width flex justify-end bottom-button">
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
          <div class="contactEffect absolute-position top">
            <img :src="contactEffect" alt="contactEffect" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import effect2 from "assets/effects/effect2.png";
import contactEffect from "assets/effects/contactEffect.png";
import desktop from "assets/contact/desktop.png";
import contact from "assets/contact/contact.png";
import mobile from "assets/contact/mobile.png";
import arrowIcon from "assets/icons/arrow.svg";
import flag from "assets/contact/flag.png";
import "../css/Contact.scss";
import axios from "axios";
export default {
  data() {
    return {
      countries: [],
      currentCountries: {
        flag: flag,
        number: "-1",
      },
      effect2,
      desktop,
      contact,
      mobile,
      flag,
      arrowIcon,
      contactEffect,
      dropDown: false,
    };
  },
  mounted() {
    this.fetchAllCountriesFlags();
  },
  methods: {
    fetchAllCountriesFlags() {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          const countriesData = response.data;
          this.countries = countriesData.map((country) => ({
            name: country.name.common,
            flagUrl: country.flags.svg,
            number: country.idd.root,
          }));
        })
        .catch((error) => {
          console.error("Error fetching countries data:", error);
        });
    },
    updateCurrentCountry(country) {
      this.currentCountries.flag = country.flagUrl;
      this.currentCountries.number = country.number;
      this.dropDown = false;
    },
    toggleDropdown() {
      this.dropDown = !this.dropDown;
    },
  },
};
</script>
