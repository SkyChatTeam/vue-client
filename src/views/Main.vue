<script setup>
import {useRouter} from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'


const router = useRouter()

</script>

<template>
  <MainHeader />

  <div class="main_slide"> <!--메인 슬라이드-->
    <img alt="banner_1" class="banner" src="@/assets/img/banner_1.jpg" />
  </div>

  <div class="mainpg_wrap"> <!--메인페이지 -->
    <div class="main_comment_wrap"> <!--홈페이지 설명-->
      <div class="comment con1">
        <h2>내가 오늘 했던<br>운동 공유하기!</h2>
        <div class="con1_img">
          <img alt="Cooperation" class="con_1" src="@/assets/img/con_1.jpg" />
        </div>
      </div>
      <div class="comment con2">
        <h2>다른 사람에<br>운동 피드도 함께소통하기!</h2>
        <div class="con2_img">
          <img alt="Cooperation" class="con_2" src="@/assets/img/con_2.jpg" />
        </div>
      </div>
      <div class="comment con3">
        <h2>모두가 만족하는<br>서비스 이용하기!</h2>
        <div class="con3_img">
          <img alt="Cooperation" class="con_2" src="@/assets/img/con_3.jpg" />
        </div>
      </div>
    </div>
  </div>

</template>

<style></style>
