<template>
  <div
    :class="{ 'dark-mode': $q.dark.isActive, 'light-mode': !$q.dark.isActive }"
  >
    <div class="desktop-version">
      <div class="flex items-center header-area">
        <div class="container">
          <nav>
            <div class="logo-area">
              <img :src="$q.dark.isActive ? Logo : darkLogo" alt="" />
            </div>
            <div class="menu-area">
              <ul class="flex">
                <li class="nav-items">
                  <router-link to="#features"
                    >Products <i class="fa-solid fa-angle-down"></i>
                  </router-link>
                  <ul class="submenu">
                    <li><router-link to="#">Web Design </router-link></li>
                    <li><router-link to="#">Graphic Design </router-link></li>
                    <li><router-link to="#">SEO </router-link></li>
                  </ul>
                </li>
                <li class="nav-items">
                  <router-link to="#useCase"
                    >Use Cases <i class="fa-solid fa-angle-down"></i>
                  </router-link>
                  <ul class="submenu">
                    <li><router-link to="#contact">Contact </router-link></li>
                    <li><router-link to="#">Graphic Design </router-link></li>
                    <li><router-link to="#">SEO </router-link></li>
                  </ul>
                </li>
                <li class="nav-items">
                  <router-link to="#pricing">Pricing</router-link>
                </li>
                <li class="nav-items">
                  <router-link to="#blog">Blog</router-link>
                </li>
              </ul>
            </div>
            <div class="button flex justify-end">
              <button
                type="button"
                class="login-btn mx-10"
                @click="toggleDarkMode"
              >
                Login
              </button>
              <button
                type="button"
                class="register-btn flex items-center justify-center"
              >
                Sign Up <img :src="arrowIcon" alt="arrowIcon" class="mx-2" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="mobile-version">
      <div class="flex items-center header-area">
        <div class="container">
          <nav class="relative-fixed items-center">
            <div class="logo-area">
              <img :src="$q.dark.isActive ? Logo : darkLogo" alt="" />
            </div>
            <div class="bar">
              <button type="button" class="bar-btn" @click="toggle">
                <img :src="$q.dark.isActive ? bar : darkBar" alt="" />
              </button>
            </div>
            <div :class="isMobile ? ' menu-area activeMenu' : 'menu-area'">
              <ul
                class="flex column justify-start items-center relative-position"
              >
                <button type="button" class="btn-close" @click="toggle">
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <li class="nav-items">
                  <router-link to="#features"
                    >Products <i class="fa-solid fa-angle-down"></i>
                  </router-link>
                  <ul class="submenu">
                    <li><router-link to="#contact">Contact </router-link></li>
                    <li><router-link to="#">Graphic Design </router-link></li>
                    <li><router-link to="#">SEO </router-link></li>
                  </ul>
                </li>
                <li class="nav-items">
                  <router-link to="#useCases"
                    >Use Cases <i class="fa-solid fa-angle-down"></i>
                  </router-link>
                  <ul class="submenu">
                    <li><router-link to="#">Web Design </router-link></li>
                    <li><router-link to="#">Graphic Design </router-link></li>
                    <li><router-link to="#">SEO </router-link></li>
                  </ul>
                </li>
                <li class="nav-items">
                  <router-link to="#pricing">Pricing</router-link>
                </li>
                <li class="nav-items">
                  <router-link to="#blog">Blog</router-link>
                </li>
                <div>
                  <div class="flex column justify-center no-wrap">
                    <button type="button" class="login-btn text-center">
                      Login
                    </button>
                    <button
                      type="button"
                      class="register-btn flex items-center justify-center"
                    >
                      Sign Up
                      <img :src="arrowIcon" alt="arrowIcon" class="mx-2" />
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/Header.scss";
import Logo from "assets/logo.svg";
import darkLogo from "assets/darkLogo.svg";
import bar from "assets/icons/bar.svg";
import darkBar from "assets/icons/darkBar.svg";
import arrowIcon from "assets/icons/arrow.svg";
import { ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();

export default {
  setup() {
    const isMobile = ref(false);

    function toggle() {
      isMobile.value = !isMobile.value;
    }

    return {
      drawer: ref(false),
      Logo,
      arrowIcon,
      bar,
      isMobile,
      toggle,
      darkLogo,
      darkBar,
    };
  },
  methods: {
    toggleDarkMode() {
      Dark.set(true);
      console.log(Dark);
    },
  },
};
</script>
<style scoped></style>
