<script setup>
import {ref, toRefs, watch} from 'vue'
import {emailValid, passwordValid} from '@/utils/validation'
import {useRouter} from 'vue-router'

const router = useRouter()
const form = ref({
  email: 'admin@test.com',
  password: '!1234qwer'
})
const formValid = ref({
  email: false,
  password: false,
  all: true
})
watch(
  () => form.value, (nv) => {
    let validateAll = []
    formValid.value.email = validateAll[0] = emailValid(nv.email)
    formValid.value.password = validateAll[1] = passwordValid(nv.password)
    formValid.value.all = validateAll.every((inputValue) => inputValue)
  },
  {deep: true}
)
const login = () => {
}


</script>
<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <main class='border w-50 p-5'>
      <h4 class='fw-bolder fs-3 text-center'> 로그인</h4>
      <div class="my-3 row w-50 mx-auto">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail" v-model="form.email">
        </div>
      </div>
      <div class="mb-3 row w-50 mx-auto">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" v-model="form.password">
        </div>
      </div>
      <div class="mb-3 row">
        <button type="submit" class="btn btn-primary mt-3 w-50 mx-auto" :disabled="!formValid.all" @click='login'>LOING</button>
      </div>
    </main>
  </div>
</template>


