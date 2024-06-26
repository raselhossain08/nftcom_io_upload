<template>
  <div class="flex items-center header-area">
    <div class="container">
      <nav>
        <div class="logo-area">
          <img :src="Logo" alt="" />
        </div>
        <div class="menu-area">
          <ul class="flex">
            <li class="nav-items">
              <router-link to="/"
                >Products <i class="fa-solid fa-angle-down"></i>
              </router-link>
              <ul class="submenu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Graphic Design</a></li>
                <li><a href="#">SEO</a></li>
              </ul>
            </li>
            <li class="nav-items">
              <router-link to="/"
                >Use Cases <i class="fa-solid fa-angle-down"></i>
              </router-link>
              <ul class="submenu">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Graphic Design</a></li>
                <li><a href="#">SEO</a></li>
              </ul>
            </li>
            <li class="nav-items">
              <router-link to="/">Pricing</router-link>
            </li>
            <li class="nav-items">
              <router-link to="/">Blog</router-link>
            </li>
          </ul>
        </div>
        <div class="button flex justify-end">
          <button type="button" class="login-btn mx-10">Login</button>
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
</template>

<script>
import Logo from "assets/logo.svg";
import arrowIcon from "assets/icons/arrow.svg";
import { ref } from "vue";
export default {
  setup() {
    return {
      drawer: ref(false),
      Logo,
      arrowIcon,
    };
  },
};
</script>
<style scoped>
.header-area {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 7777;
}
nav {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/* Reset default styles */

.menu-area ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu-area ul li {
  position: relative;
  display: inline-block;
}

.menu-area ul li a {
  display: block;
  padding: 15px 20px;
  color: #fff;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
}

.menu-area ul li:hover > .submenu {
  display: block;
}

.submenu {
  display: none;
  position: absolute;
  background-color: #555;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.submenu li {
  display: block;
  width: 100%;
}

.submenu li a {
  padding: 12px 20px;
  color: #fff;
  text-decoration: none;
  width: 100%;
  display: block;
}

.submenu li a:hover {
  background-color: #666;
}
.login-btn {
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: left;
  background: transparent;
  color: #fff;
  cursor: pointer;
}
.register-btn {
  border: none;
  background: linear-gradient(120.12deg, #fde9a3 -3.95%, #eecb4e 101.99%);
  padding: 10px 20px;
  color: #171616;
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: left;
  border-radius: 50px;
  cursor: pointer;
}
.mx-2 {
  margin-left: 5px;
  margin-right: 5px;
}
.mx-10 {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
