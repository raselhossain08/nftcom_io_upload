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
      <div class="flex justify-center q-py-xl">
        <div class="relative-position">
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
          <div v-for="(post, index) in blogPosts" :key="index" class="col-4 q-px-lg  q-py-lg">
            <div class="blog-post  ">
              <img :src="post.img" :alt="post.alt" class=" full-width" />
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
          <div class="flex content items-center">
            <h3>{{ post.price }}</h3>
            <div class="shape"></div>
            <p class="member">{{ post.members }} Members</p>
          </div>
        </div>
            </div>

      </div>
        </div>
        <div class="pagination flex items-center justify-center q-py-lg">
              <button type="button" class="page-btn"> <i class="fa-solid fa-angle-left"></i></button>
              <button type="button" class="page-btn active">1</button>
               <button type="button" class="page-btn ">2</button>
               <button type="button" class="page-btn">..</button>
               <button type="button" class="page-btn">9</button>
               <button type="button" class="page-btn">10</button>
              <button type="button" class="page-btn"> <i class="fa-solid fa-angle-right"></i></button>
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
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        {
          img: blog2,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        {
          img: blog3,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        {
          img: blog4,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        {
          img: blog5,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        {
          img: blog6,
          alt: "blog1",
          profileImg: profile,
          title: "Anime Shreds",
          privacy: "Private",
          description: "Lörem ipsum prende bloggare jung far. Salig. Reatuna speluskap, borat. Lörem ipsum prende bloggare jung far.",
          price: "$22/month",
          members: "25.5k",
        },
        // Add more blog post objects here
      ],
    };
  },
};
</script>

<style>
.use-case {
  flex-direction: column;
}
.use-case button {
  position: relative;
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: center;
  padding: 12px 25px;
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
}
.use-case button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120.12deg,
    rgba(253, 233, 163, 0.1) -3.95%,
    rgba(238, 203, 78, 0.1) 101.99%
  );
  border-radius: 50px;
}
.blog-post{
  cursor: pointer;
}
.use-case h1 {
  font-family: "Urbanist", sans-serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  padding: 20px 0;
}
.use-case p {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30.06px;
  text-align: center;
  color: #ffffff;
}

.blog-area .form-control {
  width: 688px;
  height: 61px;
  padding: 18px 447px 16px 16px;
  border-radius: 50px;
  background: #1e1c1c;
  padding-left: 50px;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  text-align: left;
  color: #868383;
  border: none;
}
.blog-area input::placeholder {
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  text-align: left;
  color: #868383;
}
.search {
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  padding: 0 20px;
}
.fa-magnifying-glass {
  color: #868383;
  font-size: 18px;
}

.blog-post {
  background: #1e1c1c;
  border: 1px solid #1e1c1c;
  border-radius: 0 0 20px 20px;
}
.avatar h2{
color: #FFFFFF;
font-family: "Urbanist",sans-serif;
font-size: 20px;
font-weight: 700;
line-height: 24px;
text-align: left;
padding-bottom: 8px;
}
.avatar button{
  background: #21E29D1A;
  color: #21E29D;
  font-family: "Inter",sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 23.38px;
  text-align: center;
  padding: 5px 15px;
  border-radius: 5px;
}

.details{
  font-family: "Inter",sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.72px;
  text-align: left;
  color:#EAE8E8;
  padding: 10px 0;
}
h3{
  font-family: "Urbanist",sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  text-decoration: none;
  color: #FFFFFF;
}
.shape{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2E2B2B;
  margin:0 10px ;
}
.member{
  font-family: "Inter",sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.72px;
  text-align: left;
  color: #EAE8E8;
  margin: 0;
}
.page-btn{
  width: 48.71px;
  height: 48.71px;
  border-radius: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1E1C1C;
  color: #FFFFFF;
  border: 0.99px solid #171616;
  margin: 0 15px;
  font-family: "Urbanist",sans-serif;
  font-size: 18.25px;
  font-weight: 700;
  line-height: 21.9px;
  text-align: center;
  cursor: pointer;
}
 .active{
  background: linear-gradient(120.12deg, #FDE9A3 -3.95%, #EECB4E 101.99%);
  color:#171616;
}
</style>
