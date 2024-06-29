<template>
  <div class="blog-area">
    <div class="container">
      <div class="use-case flex items-center justify-center q-pt-xl">
        <button type="button" class="use-case-btn">
          What People are Doing?
        </button>
        <h1>
          Explore communities or start <br />
          your own
        </h1>
        <p>
          Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat.
          <br />
          Lörem ipsum prende bloggare jung far.
        </p>
      </div>
      <div class="flex justify-center q-py-xl blog-search">
        <div class="relative-position search-input">
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Search for communities"
          />
          <div class="full-height search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(post, index) in blogPosts"
          :key="index"
          class="col-md-4 q-px-lg q-py-lg"
        >
          <div class="blog-post">
            <img :src="post.img" :alt="post.alt" class="full-width" />
            <div class="blog-body q-px-lg q-py-md">
              <div class="avatar flex items-center">
                <img :src="post.profileImg" alt="profile" class="q-pr-md" />
                <div>
                  <h2>{{ post.title }}</h2>
                  <button type="button">{{ post.privacy }}</button>
                </div>
              </div>
              <p class="details">
                {{ post.description }}
              </p>
              <div class="flex content items-center justify-between">
                <h3>{{ post.price }}</h3>
                <div class="shape"></div>
                <p class="member">{{ post.members }} Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="desktop-pagi pagination flex items-center justify-center q-py-lg"
      >
        <button type="button" class="page-btn">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button type="button" class="page-btn active">1</button>
        <button type="button" class="page-btn">2</button>
        <button type="button" class="page-btn">..</button>
        <button type="button" class="page-btn">9</button>
        <button type="button" class="page-btn">10</button>
        <button type="button" class="page-btn">
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div class="mobile-pagi pagination flex items-center justify-between">
        <button type="button" class="page-btn active">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button type="button" class="page-btn pages">page</button>
        <button type="button" class="page-btn active">
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import blog1 from "assets/blog/1.png";
import blog2 from "assets/blog/2.png";
import blog3 from "assets/blog/3.png";
import blog4 from "assets/blog/4.png";
import blog5 from "assets/blog/5.png";
import blog6 from "assets/blog/6.png";
import profile from "assets/blog/profile1.png";
import "../css/Blog.scss";
export default {
  data() {
    return {
      blogPosts: [
        {
          img: blog1,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        {
          img: blog2,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        {
          img: blog3,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        {
          img: blog4,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        {
          img: blog5,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        {
          img: blog6,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description:
            "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        // Add more blog post objects here
      ],
    };
  },
};
</script>
