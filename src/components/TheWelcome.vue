<script setup>
import Router from '@/router'
</script>

<template>
  <h3 class="fs-3 fw-bold">메인 페이지</h3>
  <p @click="Router.push({name: 'Login'})">로그인</p>
</template>
