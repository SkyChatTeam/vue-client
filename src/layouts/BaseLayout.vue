<script setup>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import NoneLayout from '@/layouts/NoneLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

//let layout = ref(NoneLayout); // metadata layout 추가 해서 나중에 가지고 오기

const layout = computed(() => {
  const layout = useRoute().meta.layout
  if (layout === 'DefaultLayout') {
    return DefaultLayout
  } else if (layout === 'NoneLayout') {
    return NoneLayout
  }
  return DefaultLayout
})
</script>

<template>
  <component :is="layout"></component>
  <!-- String 처리 해도 되도록 방법을 찾아야 할듯 합니다.-->
</template>
