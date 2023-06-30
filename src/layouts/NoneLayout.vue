<template>
  <TheLogoHeader/>
  <router-view/>
  <TheBottom/>
</template>

<!-- 쓰는걸로 익숙해질 필요 있는 (vue3 할거면 그냥 이걸로 진행 하는것도 좋음)-->
<script setup>
import TheLogoHeader from '@/components/common/TheLogoHeader.vue';
import TheBottom from '@/components/common/TheBottom.vue';
</script>

<style></style>

