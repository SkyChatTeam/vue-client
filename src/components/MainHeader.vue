<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()
function joinMove() {
  // router.push({name: 'SelectUser', query:{actionType: actionType.JOIN}});
}
</script>

<template>
  <header class="mainheader">
    <div class="mainheader_wrap">
      <div class="mainheader_left">
        <img alt="mainlogo" class="mainlogo" src="@/assets/img/logo.codjob.png" />
      </div>

      <div class="mainheader_right">
        <form class="d-flex">
          <input
            aria-label="Search"
            class="form-control search"
            placeholder="원하는 피드를 찾아보세요!!"
            type="text"
          />
        </form>
        <img alt="searchBtn" class="searchbtn" src="@/assets/img/search_btn.svg"/>
        <router-link :to="{name: 'Login'}">
          <span class="login_text">로그인</span>
        </router-link>

        <button class="joinbtn" type="button" @click="joinMove"> 무료 회원가입</button>
      </div>
    </div>
  </header>
</template>

<style></style>
