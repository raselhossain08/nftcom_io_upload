<template>
  <div>
    <div class="pricing q-pt-xl q-pb-xl">
      <div class="container">
        <div class="use-case flex items-center justify-center q-pt-xl q-pb-lg">
          <button type="button" class="use-case-btn">What We Charge</button>
          <h1>Pricing Plans</h1>
          <p>
            Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap,
            borat. <br />
            Lörem ipsum prende bloggare jung far.
          </p>
        </div>
        <div class="flex justify-center items-start">
          <div class="pricing-table q-mr-lg">
            <h1>Starter</h1>
            <p>Lörem ipsum ultrartad högen. Esk hemiseren euron.</p>
            <div
              class="flex items-center q-py-sm"
              v-for="(items, index) in starter"
              :key="index"
            >
              <div
                :class="
                  items.class == 'closed'
                    ? 'icon closed flex items-center'
                    : 'icon flex items-center'
                "
              >
                <img :src="items.icon" alt="items" />
              </div>
              <p class="name">{{ items.name }}</p>
            </div>
            <h2 class="price">$9</h2>
            <h4 class="month">/month</h4>
            <div class="q-px-lg">
              <button type="button" class="price-button">
                Start Free Trial <img :src="arrowIcon" alt="arrowIcon" />
              </button>
            </div>
          </div>
          <div class="pricing-table q-ml-lg">
            <h1>Premium</h1>
            <p>Lörem ipsum ultrartad högen. Esk hemiseren euron.</p>
            <div
              class="flex items-center q-py-sm"
              v-for="(items, index) in premium"
              :key="index"
            >
              <div
                :class="
                  items.class == 'closed'
                    ? 'icon closed flex items-center'
                    : 'icon flex items-center'
                "
              >
                <img :src="items.icon" alt="items" />
              </div>
              <p class="name">{{ items.name }}</p>
            </div>
            <h2 class="price">$79 <del>$158</del></h2>
            <h4 class="month">/month</h4>
            <div class="q-px-lg">
              <button type="button" class="price-btn2">
                Get started <img :src="arrowIcon" alt="arrowIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrowIcon from "assets/icons/arrow.svg";
import check from "assets/icons/check.svg";
import close from "assets/icons/close.svg";
export default {
  components: {},
  data() {
    return {
      arrowIcon,
      starter: [
        {
          name: "Natwark Community",
          icon: check,
        },
        {
          name: "Natwark Brand",
          icon: check,
        },
        {
          name: "Unlimited emails",
          icon: check,
        },
        {
          name: "Classroom",
          icon: check,
        },
        {
          name: "Community",
          icon: check,
        },
        {
          name: "1 Contest",
          icon: check,
        },
        {
          name: "Custom Domain",
          icon: close,
          class: "closed",
        },
        {
          name: "Custom Brand",
          icon: close,
          class: "closed",
        },
        {
          name: "Advertising",
          icon: close,
          class: "closed",
        },
        {
          name: "Control Panel",
          icon: close,
          class: "closed",
        },
      ],
      premium: [
        {
          name: "Natwark Community",
          icon: check,
        },
        {
          name: "Natwark Brand",
          icon: check,
        },
        {
          name: "Unlimited emails",
          icon: check,
        },
        {
          name: "Classroom",
          icon: check,
        },
        {
          name: "Community",
          icon: check,
        },
        {
          name: "1 Contest",
          icon: check,
        },
        {
          name: "Custom Domain",
          icon: check,
        },
        {
          name: "Custom Brand",
          icon: check,
        },
        {
          name: "Advertising",
          icon: check,
        },
        {
          name: "Control Panel",
          icon: check,
        },
      ],
    };
  },
};
</script>

<style>
.use-case {
  flex-direction: column;
}
.price-btn2 {
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
.price-btn2 img {
  padding-left: 10px;
}
.price-button {
  position: relative;
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: center;
  padding: 14px 25px;
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
  border: 1px solid #eecb4e;
  width: 100%;
}

.pricing-table h1 {
  font-family: "Urbanist", sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  padding: 20px 0;
}
.pricing-table p {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: center;
  color: #ffffff;
}
.pricing-table del {
  color: #8e8989;
}
.pricing-table h2 {
  font-family: "Urbanist", sans-serif;
  color: #ffffff;
  font-size: 50px;
  font-weight: 600;
  line-height: 60px;
  text-align: center;
  padding: 10px 0;
}
.pricing-table .month {
  font-family: "Urbanist", sans-serif;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;

  padding: 10px 0;
}

.pricing-table {
  height: 100%;
  box-shadow: 0px 4px 100px 0px #0000000d;
  background: #1e1c1c;
  border-radius: 20px;
  padding: 30px;
  width: 366px;
}
.icon {
  width: 25.66px;
  height: 25.66px;
  border-radius: 29.62px;
  background: #0e9e591a;
  display: flex;
  justify-content: center;
  align-items: center;
}
.closed {
  background: #9e170e1a;
}
.name {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.72px;
  text-align: left;
  color: #ffffff;
  padding-left: 10px;
  margin: 0;
}
</style>
